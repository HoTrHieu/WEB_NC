"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyProcessModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const enrollment_module_1 = require("../enrollment/enrollment.module");
const study_process_entity_1 = require("../shared/entities/study-process.entity");
const study_process_controller_1 = require("./study-process.controller");
const study_process_service_1 = require("./study-process.service");
const content_module_1 = require("../content/content.module");
let StudyProcessModule = class StudyProcessModule {
};
StudyProcessModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([study_process_entity_1.StudyProcess]),
            enrollment_module_1.EnrollmentModule,
            content_module_1.ContentModule,
        ],
        controllers: [study_process_controller_1.StudyProcessController],
        providers: [study_process_service_1.StudyProcessService],
        exports: [study_process_service_1.StudyProcessService],
    })
], StudyProcessModule);
exports.StudyProcessModule = StudyProcessModule;
//# sourceMappingURL=study-process.module.js.map