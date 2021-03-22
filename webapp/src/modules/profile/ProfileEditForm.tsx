import { Divider, Form, Input } from "antd";
import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router";
import { FdmLoading } from "../../shared/components/FdmLoading";
import { UserRole } from "../../shared/enums/UserRole";
import { useAuthedUser } from "../../shared/hooks/useAuthedUser";
import { useFdmStore } from "../../shared/store/useFdmStore";
import { EmailEditForm } from "./EmailEditForm";
import { FirstLastNameEditForm } from "./FirstLastNameEditForm";
import { TeacherProfileEditForm } from "./TeacherProfileEditForm";

export function ProfileEditForm(props: RouteComponentProps) {
  const store = useFdmStore();
  const dispatch = store[1];
  const { authedUser, loading } = useAuthedUser();

  const onSaveEmailSuccessHandler = useCallback(
    (email: string) => {
      dispatch("SET_USER", {
        ...authedUser,
        email,
        updatedEmailDate: new Date(),
      });
    },
    [dispatch, authedUser]
  );

  const onSaveFlNameSuccessHandler = useCallback(
    (payload: any) => {
      dispatch("SET_USER", { ...authedUser, ...payload });
    },
    [dispatch, authedUser]
  );

  const onSaveTeacherProfileSuccessHandler = useCallback(
    (payload: any) => {
      dispatch("SET_USER", { ...authedUser, ...payload });
    },
    [dispatch, authedUser]
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <FdmLoading />
      </div>
    );
  }

  return (
    <div>
      <Form.Item>
        <label className="block mb-2">Username</label>
        <Input disabled defaultValue={authedUser?.username} />
      </Form.Item>
      <Divider />
      <EmailEditForm
        authedUser={authedUser}
        onSaveSuccess={onSaveEmailSuccessHandler}
      />
      <Divider />
      <FirstLastNameEditForm
        authedUser={authedUser}
        onSaveSuccess={onSaveFlNameSuccessHandler}
      />
      {authedUser.role === UserRole.TEACHER && (
        <>
          <Divider />
          <TeacherProfileEditForm
            authedUser={authedUser}
            onSaveSuccess={onSaveTeacherProfileSuccessHandler}
          />
        </>
      )}
    </div>
  );
}
