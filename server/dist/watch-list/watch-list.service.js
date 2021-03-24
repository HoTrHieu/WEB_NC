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
exports.WatchListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const watch_list_entity_1 = require("../shared/entities/watch-list.entity");
const entity_status_1 = require("../shared/enums/entity-status");
const typeorm_2 = require("typeorm");
let WatchListService = class WatchListService {
    constructor(watchListRepository) {
        this.watchListRepository = watchListRepository;
    }
    findByUserId(userId) {
        return this.watchListRepository.find({
            userId,
            status: entity_status_1.EntityStatus.ACTIVE
        });
    }
    findByCourseIdIn(userId, courseIds) {
        return this.watchListRepository.find({
            userId,
            courseId: typeorm_2.In(courseIds),
            status: entity_status_1.EntityStatus.ACTIVE
        });
    }
    async updateStatus(courseId, userId, status) {
        const qb = this.watchListRepository
            .createQueryBuilder()
            .insert()
            .into(watch_list_entity_1.WatchList)
            .values(watch_list_entity_1.WatchList.of(courseId, userId))
            .setParameter('status', status);
        qb.expressionMap.onUpdate = { columns: 'status = :status' };
        await qb.execute();
        return true;
    }
};
WatchListService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(watch_list_entity_1.WatchList)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WatchListService);
exports.WatchListService = WatchListService;
//# sourceMappingURL=watch-list.service.js.map