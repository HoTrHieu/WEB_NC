import { useCallback, useEffect, useMemo, useState } from "react";

export function useQuery(fetchData: Function) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>(null);
  const reFetch = useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(true);
    
    if (fetchData) {
      try {
        setData(await fetchData());
      } catch (err) {
        console.error(err);
        setError(err);
      }
      setLoading(false);
    }
  }, [fetchData]);

  useEffect(() => {
    reFetch();
  }, [reFetch]);

  return useMemo(
    () => ({
      loading,
      error,
      data,
      reFetch
    }),
    [loading, error, data, reFetch]
  );
}
