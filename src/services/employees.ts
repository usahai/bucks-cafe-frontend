import { AddEmployeeForm } from "../types/form"
import apiGateway from "../configs/api"
import type { DeleteEmployee } from "../types/form"

export const getAllEmployees = async (id?: string) => {
  try {
    const { data } = await apiGateway.get('/employees', {
      params: {
        cafe_id: id
      }
    })

    return data
  } catch (error) {
    return error
  }
}

export const getEmployeeById = async (id?: string) => {
  try {
    const { data } = await apiGateway.get('/employees', {
      params: {
        emp_id: id
      }
    })

    return data
  } catch (error) {
    return error
  }
}

export const addEmployee = async (formData: AddEmployeeForm) => {
  try {
    console.log('[API] formData:', formData)
    const { data } = await apiGateway.post('/employee', {
      ...formData
    })

    return data
  } catch (error) {
    return error
  }
}

export const updateEmployee = async (formData: AddEmployeeForm & { id: string }) => {
  try {
    console.log('[API] data:', formData)
    const { data } = await apiGateway.put('/employee', {
      ...formData
    })

    return data
  } catch (error) {
    return error
  }
}

export const deleteEmployee = async (id: DeleteEmployee) => {
  try {
    const { data } = await apiGateway.delete('/employee', {
      data: id
    })

    return data
  } catch (error) {
    return error
  }
}
