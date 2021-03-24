export class EsBulkItem {
  index: string;
  id: string;
  doc: any;

  toBulkItem() {
    return [{ index: { _index: this.index, _id: this.id } }, this.doc];
  }
}
