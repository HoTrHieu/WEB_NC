import { useEffect, useMemo, useState } from "react";
import { AuthService } from "../../modules/auth/AuthService";
import { useFdmStore } from "../store/useFdmStore";

export function useAuthedUser() {
  const [loading, setLoading] = useState(true);
  const [{ user }, dispatch] = useFdmStore();

  useEffect(() => {
    (async () => {
      if (AuthService.isAuthed) {
        dispatch('SET_USER', await AuthService.getUser());
      }
      setLoading(false);
    })();
  }, [dispatch]);

  return useMemo(
    () => ({
      authedUser: user,
      loading,
    }),
    [user, loading]
  );
}
