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
var WatchList_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchList = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const entity_status_1 = require("../enums/entity-status");
const course_entity_1 = require("./course.entity");
const user_entity_1 = require("./user.entity");
let WatchList = WatchList_1 = class WatchList {
    static of(courseId, userId) {
        const watchList = new WatchList_1();
        watchList.courseId = courseId;
        watchList.userId = userId;
        watchList.course = { id: courseId };
        watchList.user = { id: userId };
        watchList.status = entity_status_1.EntityStatus.ACTIVE;
        return watchList;
    }
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], WatchList.prototype, "courseId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], WatchList.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => course_entity_1.Course }),
    typeorm_1.ManyToOne(() => course_entity_1.Course, (course) => course.watchLists),
    typeorm_1.JoinColumn({ name: 'courseId' }),
    __metadata("design:type", course_entity_1.Course)
], WatchList.prototype, "course", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => user_entity_1.User }),
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.watchLists),
    typeorm_1.JoinColumn({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], WatchList.prototype, "user", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({
        type: 'enum',
        enum: entity_status_1.EntityStatus,
        default: entity_status_1.EntityStatus.ACTIVE,
    }),
    __metadata("design:type", Number)
], WatchList.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.UpdateDateColumn(),
    class_transformer_1.Exclude(),
    __metadata("design:type", Date)
], WatchList.prototype, "updatedDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], WatchList.prototype, "createdDate", void 0);
WatchList = WatchList_1 = __decorate([
    typeorm_1.Entity({
        name: 'watch_lists',
    })
], WatchList);
exports.WatchList = WatchList;
//# sourceMappingURL=watch-list.entity.js.map