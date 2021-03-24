import { useMemo } from "react";
import { UserRole } from "../../shared/enums/UserRole";
import { UserTable } from "../user/UserTable";

export function ManageStudentPage() {
  const filters = useMemo(
    () => ({
      role: UserRole.NORMAL,
    }),
    []
  );

  return (
    <div>
      <UserTable filters={filters} />
    </div>
  );
}
