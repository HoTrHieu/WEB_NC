import React, { useMemo } from 'react';
import { UserRole } from '../../shared/enums/UserRole';
import { UserTable } from '../user/UserTable';

export function ManageTeacherListPage() {
  const filters = useMemo(
    () => ({
      role: UserRole.TEACHER,
    }),
    []
  );

  return (
    <div>
      <UserTable filters={filters} />
    </div>
  )
}