import { Table } from 'antd';
import React, { useCallback, useState } from 'react';
import { useQuery } from '../../shared/hooks/useQuery.hook';
import { CategoryService } from './CategoryService';
import { CategoryTableColumns } from './CategoryTableColumns';

export function CategoryTable() {
  const [page, setPage] = useState(1);
  const fetchCategories = useCallback(() => {
    return CategoryService.search({ page, pageSize: 20, all: true });
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
        pagination={{
          pageSize: 20,
          total: categoriesResponse.data?.total || 0,
          showSizeChanger: false,
          current: page,
          onChange: page => setPage(page)
        }}
      />
    </>
  );
}