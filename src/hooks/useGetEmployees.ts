import type { EmployeeDetails } from "../types/employees"
import { useQuery } from "@tanstack/react-query"
import { getAllEmployees } from "../services/employees"

function useGetEmployees(cafe_id?: string) {
  const query = useQuery<unknown, unknown, EmployeeDetails[]>({
    queryKey: ['employees', cafe_id],
    queryFn: () => getAllEmployees(cafe_id)
  })

  return query
}

export default useGetEmployees
