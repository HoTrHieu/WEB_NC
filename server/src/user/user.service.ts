import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OtpService } from 'src/otp/otp.service';
import { SearchRequest } from 'src/shared/dtos/search-request.dto';
import { User } from 'src/shared/entities/user.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { UserRole } from 'src/shared/enums/user-role';
import { BcryptUtil } from 'src/shared/utils/bcrypt.util';
import { ClassUtils } from 'src/shared/utils/class.util';
import { PagingUtil } from 'src/shared/utils/paging.util';
import { Like, Repository } from 'typeorm';
import { AddUserWithRoleRequest } from './dto/add-user-with-role-request.dto';
import * as moment from 'moment';
import { SearchUserRequest } from './dto/search-user-request.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private otpService: OtpService,
  ) {}

  findAll() {
    return this.userRepository.find({
      select: ['username', 'id', 'firstName', 'lastName']
    })
  }

  searchUser(request: SearchUserRequest) {
    const qb = this.userRepository
      .createQueryBuilder();
    
    if (!request.all) {
      qb.where('status = :status', { status: EntityStatus.ACTIVE });
    }
    
    if (request.isSearchTermExists) {
      qb.andWhere('email LIKE :searchTerm')
        .andWhere('firstName LIKE :searchTerm or lastName LIKE :searchTerm')
        .setParameter('searchTerm', `%${request.searchTerm}%`);
    }
    if (request.isRoleExists) {
      qb.andWhere('role = :role', { role: request.role });
    }
    return PagingUtil.paginateByQb(qb, request);
  }

  async exists(id: number) {
    return (await this.userRepository.count({ id })) > 0;
  }

  findOneById(id: number) {
    return this.userRepository.findOne(id);
  }

  findOneByUsername(username: string) {
    return this.userRepository.findOne({
      where: { username },
    });
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async addUser(request: AddUserWithRoleRequest, hashPassword = true) {
    let exists = await this.findOneByEmail(request.email);
    if (exists) {
      throw new BadRequestException('Email has already existed');
    }
    exists = await this.findOneByUsername(request.username);
    if (exists) {
      throw new BadRequestException('Username has already existed');
    }
    const user = ClassUtils.copyFields(request, {});
    if (hashPassword) {
      user.passwordHash = await this.hashPassword(user.password);
    }
    user.status = EntityStatus.ACTIVE;
    return this.userRepository.save(user);
  }

  async updateStatus(id: number, status: EntityStatus) {
    const result = await this.userRepository.update(
      { id },
      {
        status,
      },
    );
    return result.affected > 0;
  }

  async updateFirstLastName(id: number, firstName: string, lastName: string) {
    const result = await this.userRepository.update(
      { id },
      { firstName, lastName },
    );
    return result.affected > 0;
  }

  async updateTeacherProfile(id: number, bio: string, introduction: string) {
    const result = await this.userRepository.update(
      { id },
      { bio, introduction },
    );
    return result.affected > 0;
  }

  async updateEmail(id: number, email: string, otp: string) {
    const validOtp = await this.otpService.checkOtp(otp, email);
    if (!validOtp) {
      throw new BadRequestException('OTP is invalid');
    }
    const exists = await this.userRepository.findOne({ email });
    if (!!exists) {
      throw new BadRequestException('Email has already existed');
    }
    const user = await this.findOneById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (!!user.updatedEmailDate) {
      const remainDays =
        30 - moment().diff(moment(user.updatedEmailDate), 'days');
      if (remainDays > 0) {
        throw new BadRequestException(
          `Please wait for ${remainDays} days to update your email`,
        );
      }
    }
    const result = await this.userRepository.update(
      { id },
      {
        email,
        updatedEmailDate: new Date(),
      },
    );
    return result.affected > 0;
  }

  async updatePassword(id: number, newPassword: string) {
    const newPasswordHash = await this.hashPassword(newPassword);
    const result = await this.userRepository.update(
      { id },
      { passwordHash: newPasswordHash },
    );
    return result.affected > 0;
  }

  async updateRole(id: number, newRole: UserRole) {
    const result = await this.userRepository.update({ id }, { role: newRole });
    return result.affected > 0;
  }

  private hashPassword(password: string) {
    return BcryptUtil.hash(password);
  }

  comparePassword(password: string, hash: string) {
    return BcryptUtil.compare(password, hash);
  }
}
