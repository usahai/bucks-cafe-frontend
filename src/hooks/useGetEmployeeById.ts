import type { EmployeeDetails } from "../types/employees"
import { useQuery } from "@tanstack/react-query"
import { getEmployeeById } from "../services/employees"

function useGetEmployeeById(emp_id: string) {
  const query = useQuery<unknown, unknown, EmployeeDetails[]>({
    queryKey: ['employees', emp_id],
    queryFn: () => getEmployeeById(emp_id)
  })

  return query
}

export default useGetEmployeeById
