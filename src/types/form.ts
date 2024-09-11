import { z, ZodType } from "zod";
import { Gender } from "../constants/gender";

// Cafe-related Form instances
export interface AddCafeForm {
  name: string;
  location: string;
  description: string;
}

export const AddCafeSchema: ZodType<AddCafeForm> = z.object({
  name: z
    .string()
    .min(1, { message: 'Required' })
    .max(40, { message: "Name is too long" }),
  location: z.string().min(1, { message: 'Required' }).max(256, { message: "Location is too long" }),
  description: z.string().min(1, { message: 'Required' }).max(256, { message: "Name is too long" })
})

export interface DeleteCafe {
  id: string
}

// Employee-related Form instances
export interface AddEmployeeForm {
  name: string;
  email_address: string;
  phone_number: string;
  gender: Gender
  cafe_id?: string;
  emp_id?: string;
}

export const AddEmployeeSchema: ZodType<AddEmployeeForm> = z.object({
  name: z
    .string()
    .min(1, { message: 'Required' })
    .max(40, { message: "Name is too long" }),
  email_address: z
    .string()
    .min(1, { message: 'Required' })
    .email({ message: 'Invalid email' }),
  phone_number: z
    .string({ required_error: 'Required' })
    .min(1, { message: "Required" })
    .refine((val) => val.length === 8 && (val.charAt(0) === '8' || val.charAt(0) === '9'), 'Invalid number'),
  gender: z.enum(['Male', 'Female'] as const, { message: 'Required' }),
  assinged_cafe: z.string().optional()
})

export interface DeleteEmployee {
  id: string
}