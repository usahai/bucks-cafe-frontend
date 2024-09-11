import type { Cafe } from "../types/cafes"
import { getCafeById } from "../services/cafes"
import { useQuery } from "@tanstack/react-query"

function useGetCafeById(id: string) {
  const query = useQuery<{ id: string }, unknown, Cafe>({
    queryKey: ['cafes', id],
    queryFn: () => getCafeById(id),
    enabled: !!id
  })

  return query
}

export default useGetCafeById