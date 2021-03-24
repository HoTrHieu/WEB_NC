"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagingUtil = void 0;
const paging_response_dto_1 = require("../dtos/paging-response.dto");
class PagingUtil {
    static async paginate(repository, paging, options) {
        const [items, total] = await repository.findAndCount(Object.assign(Object.assign({}, options), { skip: paging.offset, take: paging.pageSize }));
        return paging_response_dto_1.PagingResponse.of(paging.page, paging.pageSize, total, items);
    }
    static async paginateByQb(queryBuilder, paging) {
        const [items, total] = await queryBuilder
            .skip(paging.offset)
            .take(paging.pageSize)
            .getManyAndCount();
        return paging_response_dto_1.PagingResponse.of(paging.page, paging.pageSize, total, items);
    }
}
exports.PagingUtil = PagingUtil;
//# sourceMappingURL=paging.util.js.map