import { Response } from "dwolla-v2"
import ApiResponse, { InternalCodes } from "../controller/responses"
import dwolla from "../dwollaAdmin/dwollaAdmin"
import ApiError from "../errors/ApiError"

export const createCardFundingSourcesToken = async (id: String) => {
  try {
    const response: Response = await dwolla.get(`/customers/${id}/card-funding-sources-token`)
    return response.body.token
  } catch (error) {
    const errorDetails = handleErrorResponse(error)
    const {numberStatus, info, status, detailInfo} = errorDetails
    throw ApiError.fromDwollaAPI(numberStatus, ApiResponse.fromDwollaAPI(info, status, detailInfo))
  }
}

export const handleErrorResponse = (error: any): {status:InternalCodes, numberStatus: number, info: string, detailInfo: string } => {
  const status : InternalCodes = error.status.toString()
  const numberStatus: number = error.status
  const jsonError = JSON.parse(error.message)
  const info:string = jsonError._embedded.errors[0].code
  const detailInfo:string = jsonError._embedded.errors[0].message
  // console.log(error)
  return {
    status,
    numberStatus,
    info,
    detailInfo,
  }
}