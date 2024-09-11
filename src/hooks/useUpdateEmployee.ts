import { AddEmployeeForm } from "../types/form"
import { updateEmployee } from "../services/employees"
import { useMutation, UseMutationOptions } from "@tanstack/react-query"

function useUpdateEmployee(id: string, options: Omit<UseMutationOptions<unknown, unknown, AddEmployeeForm>, 'mutationFn'>) {
  const mutation = useMutation({
    mutationFn: async (formData: AddEmployeeForm) => await updateEmployee({ id, ...formData }),
    ...options
  })

  return mutation
}

export default useUpdateEmployee