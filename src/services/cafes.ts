import { AddCafeForm, DeleteCafe } from "../types/form"
import apiGateway from "../configs/api"

export const getAllCafes = async () => {
  try {
    const { data } = await apiGateway.get('/cafes')


    return data
  } catch (error) {
    return error
  }
}

export const addCafe = async (formData: AddCafeForm) => {
  try {
    const { data } = await apiGateway.post('/cafe', {
      ...formData
    })

    return data
  } catch (error) {
    return error
  }
}

export const getCafeById = async (id: string) => {
  try {
    const { data } = await apiGateway.get(`/cafes?id=${id}`)

    console.log('[API] data:', data)

    return data
  } catch (error) {
    return error
  }
}

export const updateCafe = async (formData: AddCafeForm & { id: string }) => {
  try {
    const { data } = await apiGateway.put('/cafe', {
      ...formData
    })

    return data
  } catch (error) {
    return error
  }
}

export const deleteCafe = async (id: DeleteCafe) => {
  try {
    const { data } = await apiGateway.delete('/cafe', {
      data: id
    })

    return data
  } catch (error) {
    return error
  }
}
