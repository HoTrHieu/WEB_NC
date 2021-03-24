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
var CourseEsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseEsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const category_service_1 = require("../category/category.service");
const es_helper_service_1 = require("../es-helper/es-helper.service");
const course_entity_1 = require("../shared/entities/course.entity");
const entity_status_1 = require("../shared/enums/entity-status");
const array_util_1 = require("../shared/utils/array.util");
const course_es_doc_dto_1 = require("./dto/course-es-doc.dto");
let CourseEsService = CourseEsService_1 = class CourseEsService {
    constructor(esService, esHelper, config, categoryService) {
        this.esService = esService;
        this.esHelper = esHelper;
        this.config = config;
        this.categoryService = categoryService;
        this.logger = new common_1.Logger(CourseEsService_1.name);
        this.ES_INDEX_NAME = this.config.get('es.index.course');
    }
    async search(request) {
        const searchBody = {
            from: request.offset,
            size: request.pageSize,
            track_total_hits: true,
            _source: false,
            query: {
                bool: {
                    filter: [],
                },
            },
            sort: [
                {
                    totalEnrollment: {
                        order: 'desc',
                    },
                },
                {
                    createdDate: {
                        order: 'desc',
                    },
                },
            ],
        };
        if (request.isSort) {
            searchBody.sort = [
                {
                    [request.orderBy]: {
                        order: request.orderDirection,
                    },
                },
                ...searchBody.sort,
            ];
        }
        if (request.isSearching) {
            if (request.isSearchTermExists) {
                searchBody.query.bool.filter.push({
                    match_phrase: {
                        title: request.searchTerm,
                    },
                });
            }
            if (request.isCategoryIdsExists) {
                searchBody.query.bool.filter.push({
                    terms: {
                        categoryId: request.getCategoryIds(),
                    },
                });
            }
            if (request.isFromPriceExists) {
                searchBody.query.bool.filter.push({
                    range: {
                        price: { gte: request.fromPrice },
                    },
                });
            }
            if (request.isToPriceExists) {
                searchBody.query.bool.filter.push({
                    range: {
                        price: { lte: request.toPrice },
                    },
                });
            }
            if (request.isFromStarExists) {
                searchBody.query.bool.filter.push({
                    range: {
                        avgStar: { gte: request.fromStar },
                    },
                });
            }
            if (request.isFromStarExists) {
                searchBody.query.bool.filter.push({
                    range: {
                        avgStar: { lte: request.toStar },
                    },
                });
            }
            if (request.isIdsExists) {
                searchBody.query.bool.filter.push({
                    terms: {
                        id: request.ids,
                    },
                });
            }
            if (request.isCreatorIdExists) {
                searchBody.query.bool.filter.push({
                    term: {
                        creatorId: request.creatorId
                    }
                });
            }
        }
        const esResult = await this.esService.search({
            index: this.ES_INDEX_NAME,
            body: searchBody,
        });
        if (!esResult.body.hits) {
            throw new common_1.InternalServerErrorException('Search from Elasticsearch failed!');
        }
        return {
            total: esResult.body.hits.total.value,
            courseIds: esResult.body.hits.hits.map((hit) => Number(hit._id)),
        };
    }
    async upsertCourse(course) {
        const category = await this.categoryService.findOne(course.categoryId);
        return this.esHelper.upsert(this.ES_INDEX_NAME, String(course.id), course_es_doc_dto_1.CourseEsDoc.of(Object.assign(Object.assign({}, course), { category })));
    }
    async partialUpdate(id, doc) {
        if ('categoryId' in doc) {
            const parentCategoryId = await this.categoryService.findParentId(doc.categoryId);
            doc.categoryId = [doc.categoryId];
            if (!!parentCategoryId) {
                doc.categoryId.push(parentCategoryId);
            }
        }
        return this.esHelper.upsert(this.ES_INDEX_NAME, String(id), doc);
    }
    updateStatus(id, status) {
        return this.partialUpdate(id, { status });
    }
    async syncToEs(courses) {
        const body = array_util_1.ArrayUtil.flatMap(courses.map((course) => [
            { index: { _index: this.ES_INDEX_NAME, _id: course.id } },
            course_es_doc_dto_1.CourseEsDoc.of(course),
        ]));
        if (body.length > 0) {
            const result = await this.esService.bulk({
                refresh: true,
                body,
            });
            if (result.body.errors) {
                this.logger.error(result.body.errors);
                return false;
            }
        }
        return true;
    }
};
CourseEsService = CourseEsService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [elasticsearch_1.ElasticsearchService,
        es_helper_service_1.EsHelperService,
        config_1.ConfigService,
        category_service_1.CategoryService])
], CourseEsService);
exports.CourseEsService = CourseEsService;
//# sourceMappingURL=course-es.service.js.map