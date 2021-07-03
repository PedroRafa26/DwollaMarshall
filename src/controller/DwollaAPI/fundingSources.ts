import { Response } from "dwolla-v2"
import dwolla from "../../dwollaAdmin/dwollaAdmin"
import ApiError from "../../errors/ApiError"
import { createCardFundingSourcesToken, handleErrorResponse } from "../../handlers/dwollaUtils"
import { DwollaCostumerFS } from "../../models/dwollaFS"
import ApiResponse from "../responses"

class DwollaFundingSources {

  constructor() { }

  async addBankAccount(id: String, fundingSource: DwollaCostumerFS) {
    try {
      const response = await dwolla.post(`/customers/${id}/funding-sources`, fundingSource)
      return response.headers.get('location')
    } catch (error) {
      const errorDetails = handleErrorResponse(error);
      const { status, info, detailInfo, numberStatus } = errorDetails
      throw ApiError.fromDwollaAPI(numberStatus, ApiResponse.fromDwollaAPI(info, status, detailInfo))
    }
  }

  async verifyWithMicroDeposit(id: String) {
    try {
      const response = await dwolla.post(`funding-sources/${id}/micro-deposits`);
      console.log(response)
      return response.status
    } catch (error) {
      const errorFS = handleErrorResponse(error);
      const {status, numberStatus, info, detailInfo} = errorFS
      throw ApiError.fromDwollaAPI(numberStatus, ApiResponse.fromDwollaAPI(info, status, detailInfo))
    }
  }

  async generateIAVtoken(id: String){
    try {
      const response: Response = await dwolla.post(`/customers/${id}/iav-token`)
      return response.body.token
    } catch (error) {
      const errorDetails = handleErrorResponse(error)
      const {numberStatus, info, status, detailInfo} = errorDetails
      throw ApiError.fromDwollaAPI(numberStatus, ApiResponse.fromDwollaAPI(info, status, detailInfo))
    }
  }
}

export default new DwollaFundingSources