import { AddEmployeeForm } from "@/types/form"
import { addEmployee } from "../services/employees"
import { useMutation, UseMutationOptions } from "@tanstack/react-query"

function useAddEmployee(options: Omit<UseMutationOptions<unknown, unknown, AddEmployeeForm>, 'mutationFn'>) {
  const mutation = useMutation<unknown, unknown, AddEmployeeForm>({
    mutationFn: async (formData) => await addEmployee(formData),
    ...options
  })

  return mutation
}

export default useAddEmployee