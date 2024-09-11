import { AddCafeForm } from "@/types/form"
import { addCafe } from "../services/cafes"
import { useMutation, UseMutationOptions } from "@tanstack/react-query"

function useAddCafe(options: Omit<UseMutationOptions<unknown, unknown, AddCafeForm>, 'mutationFn'>) {
  const mutation = useMutation({
    mutationFn: async (formData: AddCafeForm) => await addCafe(formData),
    ...options
  })

  return mutation
}

export default useAddCafe