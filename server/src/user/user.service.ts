import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchRequest } from 'src/shared/dtos/search-request.dto';
import { User } from 'src/shared/entities/user.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { UserRole } from 'src/shared/enums/user-role';
import { BcryptUtil } from 'src/shared/utils/bcrypt.util';
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

  findOneById(id: number) {
    return this.userRepository.findOne(id);
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async addUser(request: AddUserRequest) {
    let user = await this.findOneByEmail(request.email);
    if (!user) {
      user = this.userRepository.create({
        email: request.email,
      });
    }
    user.displayName = request.displayName;
    user.passwordHash = await this.hashPassword(request.password);
    user.role = request.role;
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

  async updateDisplayName(id: number, newDisplayName: string) {
    const result = await this.userRepository.update(
      { id },
      { displayName: newDisplayName },
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
