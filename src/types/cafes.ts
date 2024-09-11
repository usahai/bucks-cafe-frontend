import { Employee } from "./employees";

export interface Cafe {
  cafe_id: string
  cafe_name: string
  description: string
  location: string
}

export interface GetCafesResponse {
  cafe: Cafe
  employees: Employee[]
}
