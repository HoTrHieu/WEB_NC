import { Pagination, Table } from 'antd';
import React, { useCallback, useState } from 'react';
import { useQuery } from '../../shared/hooks/useQuery.hook';
import { CategoryService } from './CategoryService';
import { CategoryTableColumns } from './CategoryTableColumns';

export function CategoryTable() {
  const [page, setPage] = useState(1);
  const fetchCategories = useCallback(() => {
    return CategoryService.search({ page, pageSize: 20 });
  }, [page]);

  const categoriesResponse = useQuery(fetchCategories);

  return (
    <>
      <div className="mb-4">
        Total: <b>{categoriesResponse.data?.total || 0}</b> categories
      </div>

      <Table
        columns={CategoryTableColumns}
        loading={categoriesResponse.loading || !!categoriesResponse.error}
        dataSource={categoriesResponse.data?.items}
      />

      <div className="flex justify-center mt-5">
        <Pagination total={categoriesResponse.data?.total || 0} pageSize={50} current={page} onChange={(page) => setPage(page)} />
      </div>
    </>
  );
}