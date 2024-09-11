import { AddEmployeeForm } from "../../types/form";
import { EmployeeDetails } from "../../types/employees";
import { Gender } from "../../constants/gender";

export function mapToEmployeeFormData(data: EmployeeDetails[]): AddEmployeeForm | undefined {
  // if (!data.length) return undefined
  const emp_data = data[0]
  return {
    emp_id: emp_data.emp_id,
    name: emp_data.emp_name,
    email_address: emp_data.email_address,
    phone_number: emp_data.phone_number,
    cafe_id: emp_data.cafe_id,
    gender: emp_data?.gender as Gender
  }
}