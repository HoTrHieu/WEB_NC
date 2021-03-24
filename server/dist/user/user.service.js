"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const otp_service_1 = require("../otp/otp.service");
const search_request_dto_1 = require("../shared/dtos/search-request.dto");
const user_entity_1 = require("../shared/entities/user.entity");
const entity_status_1 = require("../shared/enums/entity-status");
const user_role_1 = require("../shared/enums/user-role");
const bcrypt_util_1 = require("../shared/utils/bcrypt.util");
const class_util_1 = require("../shared/utils/class.util");
const paging_util_1 = require("../shared/utils/paging.util");
const typeorm_2 = require("typeorm");
const moment = require("moment");
let UserService = class UserService {
    constructor(userRepository, otpService) {
        this.userRepository = userRepository;
        this.otpService = otpService;
    }
    searchUser(request) {
        const qb = this.userRepository
            .createQueryBuilder()
            .where('status = :status', { status: entity_status_1.EntityStatus.ACTIVE });
        if (request.isSearchTermExists) {
            qb.andWhere('email LIKE :searchTerm')
                .andWhere('firstName LIKE :searchTerm or lastName LIKE :searchTerm')
                .setParameter('searchTerm', `%${request.searchTerm}%`);
        }
        if (request.isRoleExists) {
            qb.andWhere('role = :role', { role: request.role });
        }
        return paging_util_1.PagingUtil.paginateByQb(qb, request);
    }
    async exists(id) {
        return (await this.userRepository.count({ id })) > 0;
    }
    findOneById(id) {
        return this.userRepository.findOne(id);
    }
    findOneByUsername(username) {
        return this.userRepository.findOne({
            where: { username },
        });
    }
    findOneByEmail(email) {
        return this.userRepository.findOne({
            where: { email },
        });
    }
    async addUser(request, hashPassword = true) {
        let exists = await this.findOneByEmail(request.email);
        if (exists) {
            throw new common_1.BadRequestException('Email has already existed');
        }
        exists = await this.findOneByUsername(request.username);
        if (exists) {
            throw new common_1.BadRequestException('Username has already existed');
        }
        const user = class_util_1.ClassUtils.copyFields(request, {});
        if (hashPassword) {
            user.passwordHash = await this.hashPassword(user.password);
        }
        user.status = entity_status_1.EntityStatus.ACTIVE;
        return this.userRepository.save(user);
    }
    async updateStatus(id, status) {
        const result = await this.userRepository.update({ id }, {
            status,
        });
        return result.affected > 0;
    }
    async updateFirstLastName(id, firstName, lastName) {
        const result = await this.userRepository.update({ id }, { firstName, lastName });
        return result.affected > 0;
    }
    async updateTeacherProfile(id, bio, introduction) {
        const result = await this.userRepository.update({ id }, { bio, introduction });
        return result.affected > 0;
    }
    async updateEmail(id, email, otp) {
        const validOtp = await this.otpService.checkOtp(otp, email);
        if (!validOtp) {
            throw new common_1.BadRequestException('OTP is invalid');
        }
        const exists = await this.userRepository.findOne({ email });
        if (!!exists) {
            throw new common_1.BadRequestException('Email has already existed');
        }
        const user = await this.findOneById(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (!!user.updatedEmailDate) {
            const remainDays = 30 - moment().diff(moment(user.updatedEmailDate), 'days');
            if (remainDays > 0) {
                throw new common_1.BadRequestException(`Please wait for ${remainDays} days to update your email`);
            }
        }
        const result = await this.userRepository.update({ id }, {
            email,
            updatedEmailDate: new Date(),
        });
        return result.affected > 0;
    }
    async updatePassword(id, newPassword) {
        const newPasswordHash = await this.hashPassword(newPassword);
        const result = await this.userRepository.update({ id }, { passwordHash: newPasswordHash });
        return result.affected > 0;
    }
    async updateRole(id, newRole) {
        const result = await this.userRepository.update({ id }, { role: newRole });
        return result.affected > 0;
    }
    hashPassword(password) {
        return bcrypt_util_1.BcryptUtil.hash(password);
    }
    comparePassword(password, hash) {
        return bcrypt_util_1.BcryptUtil.compare(password, hash);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        otp_service_1.OtpService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map