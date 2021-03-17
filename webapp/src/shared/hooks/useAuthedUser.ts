import { useEffect, useMemo, useState } from "react";
import { AuthService } from "../../modules/auth/AuthService";
import { IUser } from "../entities/IUser";

export function useAuthedUser() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    (async () => {
      if (AuthService.isAuthed) {
        setUser(await AuthService.getUser());
      }
      setLoading(false);
    })();
  }, []);

  return useMemo(
    () => ({
      authedUser: user,
      loading,
    }),
    [user, loading]
  );
}
