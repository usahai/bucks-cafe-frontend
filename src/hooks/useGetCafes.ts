import type { GetCafesResponse } from "../types/cafes"
import { getAllCafes } from "../services/cafes"
import { useQuery } from "@tanstack/react-query"

function useGetCafes() {
  const query = useQuery<unknown, unknown, GetCafesResponse[]>({
    queryKey: ['cafes'],
    queryFn: () => getAllCafes()
  })

  return query
}

export default useGetCafes