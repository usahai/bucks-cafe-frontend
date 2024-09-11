import { DeleteCafe } from "@/types/form"
import { deleteCafe } from "../services/cafes"
import { useMutation, UseMutationOptions } from "@tanstack/react-query"


function useDeleteCafe(options?: Omit<UseMutationOptions<unknown, unknown, DeleteCafe>, 'mutationFn'>) {
  const mutation = useMutation<unknown, unknown, DeleteCafe>({
    mutationFn: async (id) => await deleteCafe(id),
    ...options
  })

  return mutation
}

export default useDeleteCafe