import { Gender } from "../constants/gender"

export interface Employee {
  emp_id: string
  emp_name: string
  email_address: string
  phone_number: string
  gender?: Gender
  start_date: string
}

export interface EmployeeDetails extends Omit<Employee, 'start_date'> {
  days_worked: string
  cafe_name: string
  cafe_emp_id?: string
  cafe_id?: string
}
