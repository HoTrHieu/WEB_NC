import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchRequest } from 'src/shared/dtos/search-request.dto';
import { User } from 'src/shared/entities/user.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { UserRole } from 'src/shared/enums/user-role';
import { BcryptUtil } from 'src/shared/utils/bcrypt.util';
import { ClassUtils } from 'src/shared/utils/class.util';
import { PagingUtil } from 'src/shared/utils/paging.util';
import { Like, Repository } from 'typeorm';
import { AddUserRequest } from './dto/add-user-request.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  searchUser(request: SearchRequest) {
    const emailCondition: any = {};
    const displayNameCondition: any = {};
    const andConditions = { status: EntityStatus.ACTIVE };
    if (request.isSearchTermExists) {
      emailCondition.email = Like(`%${request.searchTerm}%`);
      displayNameCondition.displayName = Like(`%${request.searchTerm}%`);
    }
    return PagingUtil.paginate(this.userRepository, request, {
      where: [
        { ...emailCondition, ...andConditions },
        { ...displayNameCondition, ...andConditions },
      ],
    });
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

  async addUser(request: AddUserRequest) {
    let count = await this.userRepository.count({ email: request.email });
    if (count > 0) {
      throw new BadRequestException('Email đã tồn tại');
    }
    count = await this.userRepository.count({ username: request.username });
    if (count > 0) {
      throw new BadRequestException('Tên tài khoản đã tồn tại');
    }
    const user = ClassUtils.copyFields(request, {});
    user.passwordHash = await this.hashPassword(request.password);
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

  async updateEmail(id: number, email: string) {
    const count = await this.userRepository.count({ email });
    if (count > 0) {
      throw new BadRequestException('Email đã tồn tại');
    }

    const result = await this.userRepository.update({ id }, { email });
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
