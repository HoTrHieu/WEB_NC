import { useEffect, useMemo, useState } from "react";

export function useQuery(fetchData: Function) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
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
    })();
  }, [fetchData]);

  return useMemo(
    () => ({
      loading,
      error,
      data,
    }),
    [loading, error, data]
  );
}
