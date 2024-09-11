import { AddCafeForm } from "@/types/form"
import { updateCafe } from "../services/cafes"
import { useMutation, UseMutationOptions } from "@tanstack/react-query"

function useUpdateCafe(id: string, options: Omit<UseMutationOptions<unknown, unknown, AddCafeForm>, 'mutationFn'>) {
  const mutation = useMutation({
    mutationFn: async (formData: AddCafeForm) => await updateCafe({ id, ...formData }),
    ...options
  })

  return mutation
}

export default useUpdateCafe