import { Response } from "dwolla-v2";
import { response } from "express";
import dwolla from "../../dwollaAdmin/dwollaAdmin";
import ApiError from "../../errors/ApiError";
import { DwollaCreateBusinessWithController, DwollaCreateBusinessWithoutController, DwollaCreatePersonalCostumer, DwollaCreateReceiveOnlyCostumer } from "../../models/dwollaCostumer";
import ApiResponse, { InternalCodes } from "../responses";

class DwollaCostumersAPI {
  constructor() { }

  async createReceiveOnlyCostumer(costumer: DwollaCreateReceiveOnlyCostumer): Promise<number> {
    try {

      const createRequest = (costumer.businessName !== '')
        ? {
          ...costumer,
          type: 'receive-only',
        }
        : {
          firstName: costumer.firstName,
          lastName: costumer.lastName,
          type: 'receive-only',
        }
      const response = await dwolla.post('/customers', createRequest)

      return response.status;

    } catch (error) {
      const errorDetails = handleErrorResponse(error);
      const {status, info, detailInfo, numberStatus} = errorDetails
      throw ApiError.fromDwollaAPI(numberStatus, ApiResponse.fromDwollaAPI(info, status, detailInfo))
    }
  }

  async createPersonalCostumer(costumer: DwollaCreatePersonalCostumer) : Promise<number> {
    try {
      const createRequest = {
        ...costumer,
        type: 'personal',
      }
      const response = await dwolla.post('/customers', createRequest)
      // if (response.status !== 201) throw error;

      return response.status;

    } catch (error) {
      const errorDetails = handleErrorResponse(error);
      const {status, info, detailInfo, numberStatus} = errorDetails
      throw ApiError.fromDwollaAPI(numberStatus, ApiResponse.fromDwollaAPI(info, status, detailInfo))
    }
  }

  async createBusinessCostumerWithoutController(costumer: DwollaCreateBusinessWithoutController) : Promise<number>{
    try {
      const createRequest = {
        ...costumer,
        type: 'business',
      }
      const response = await dwolla.post('/customers', createRequest)
      // if (response.status !== 201) throw error;

      return response.status;

    } catch (error) {
      const errorDetails = handleErrorResponse(error);
      const {status, info, detailInfo, numberStatus} = errorDetails
      throw ApiError.fromDwollaAPI(numberStatus, ApiResponse.fromDwollaAPI(info, status, detailInfo))
    }
  }

  async createBusinessCostumerWithController(costumer: DwollaCreateBusinessWithController) : Promise<number>{
    try {
      const createRequest = {
        ...costumer,
        type: 'business',
      }
      const response = await dwolla.post('/customers', createRequest)
      // if (response.status !== 201) throw error;

      return response.status;

    } catch (error) {
      const errorDetails = handleErrorResponse(error);
      const {status, info, detailInfo, numberStatus} = errorDetails
      throw ApiError.fromDwollaAPI(numberStatus, ApiResponse.fromDwollaAPI(info, status, detailInfo))
    }
  }

  async consultCostumerStatus(id: String): Promise<String> {
    try {
      const response: Response = await dwolla.get(`https://api-sandbox.dwolla.com/customers/${id}`)
      const status: String = response.body.status
      return status
    } catch (error) {
      const errorDetails = handleErrorResponse(error);
      const {status, info, detailInfo, numberStatus} = errorDetails
      throw ApiError.fromDwollaAPI(numberStatus, ApiResponse.fromDwollaAPI(info, status, detailInfo))
    }
  }
}

export default new DwollaCostumersAPI()

const handleErrorResponse = (error: any): {status:InternalCodes, numberStatus: number, info: string, detailInfo: string } => {
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