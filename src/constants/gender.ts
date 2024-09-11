import { ValuesOf } from "@/utils/values-of"

export const GENDER = {
  MALE: "Male",
  FEMALE: "Female"
} as const
export type Gender = ValuesOf<typeof GENDER>
