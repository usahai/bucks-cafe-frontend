import { GENDER } from "../../constants/gender"
import { GetCafesResponse } from "../../types/cafes"

export function getListOfCafes(cafes: GetCafesResponse[]) {
  return cafes.map(({ cafe }) => ({
    value: cafe.cafe_id,
    label: cafe.cafe_name
  }))
}

export function getListOfGenders() {
  return Object.values(GENDER).map((key) => ({
    value: key,
    label: key,
  }))
}