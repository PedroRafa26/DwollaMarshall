import { Response } from "dwolla-v2";
import dwolla from "../../dwollaAdmin/dwollaAdmin";
import ApiError from "../../errors/ApiError";
import { handleErrorResponse } from "../../handlers/dwollaUtils";
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
      const response: Response = await dwolla.get(`/customers/${id}`)
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

