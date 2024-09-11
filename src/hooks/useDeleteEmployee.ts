import { DeleteEmployee } from "../types/form"
import { deleteEmployee } from "../services/employees"
import { useMutation, UseMutationOptions } from "@tanstack/react-query"


function useDeleteCafe(options?: Omit<UseMutationOptions<unknown, unknown, DeleteEmployee>, 'mutationFn'>) {
  const mutation = useMutation<unknown, unknown, DeleteEmployee>({
    mutationFn: async (id) => await deleteEmployee(id),
    ...options
  })

  return mutation
}

export default useDeleteCafe