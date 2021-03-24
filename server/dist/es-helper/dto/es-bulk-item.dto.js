"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsBulkItem = void 0;
class EsBulkItem {
    toBulkItem() {
        return [{ index: { _index: this.index, _id: this.id } }, this.doc];
    }
}
exports.EsBulkItem = EsBulkItem;
//# sourceMappingURL=es-bulk-item.dto.js.map