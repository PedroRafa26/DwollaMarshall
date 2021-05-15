import { Response } from "dwolla-v2";
import { response } from "express";
import dwolla from "../../dwollaAdmin/dwollaAdmin";
import ApiError from "../../errors/ApiError";
import { DwollaCreateBusinessWithController, DwollaCreateBusinessWithoutController, DwollaCreatePersonalCostumer, DwollaCreateReceiveOnlyCostumer } from "../../models/dwollaCostumer";
import ApiResponse from "../responses";

class DwollaCostumersAPI {
  constructor() { }

  async createReceiveOnlyCostumer(costumer: DwollaCreateReceiveOnlyCostumer): Promise<Number> {
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
      // console.log(error)
      throw ApiError.internal(ApiResponse.internal("There was an error in costumer's creation"))
    }
  }

  async createPersonalCostumer(costumer: DwollaCreatePersonalCostumer) {
    try {
      const createRequest = {
        ...costumer,
        type: 'personal',
      }
      const response = await dwolla.post('/customers', createRequest)
      // if (response.status !== 201) throw error;

      return response.status;

    } catch (error) {
      // console.log(error)
      throw ApiError.internal(ApiResponse.internal("There was an error in costumer's creation"))
    }
  }

  async createBusinessCostumerWithoutController(costumer: DwollaCreateBusinessWithoutController){
    try {
      const createRequest = {
        ...costumer,
        type: 'business',
      }
      const response = await dwolla.post('/customers', createRequest)
      // if (response.status !== 201) throw error;

      return response.status;

    } catch (error) {
      // console.log(error)
      throw ApiError.internal(ApiResponse.internal("There was an error in costumer's creation"))
    }
  }
  
  async createBusinessCostumerWithController(costumer: DwollaCreateBusinessWithController){
    try {
      const createRequest = {
        ...costumer,
        type: 'business',
      }
      const response = await dwolla.post('/customers', createRequest)
      // if (response.status !== 201) throw error;

      return response.status;

    } catch (error) {
      // console.log(error)
      throw ApiError.internal(ApiResponse.internal("There was an error in costumer's creation"))
    }
  }

  async consultCostumerStatus(id: String):Promise<String>{
    try {
      const response:Response = await dwolla.get(`https://api-sandbox.dwolla.com/customers/${id}`)
      const status: String = response.body.status
      return status
    } catch (error) {
      throw ApiError.internal(ApiResponse.internal("There was an error in costumer's creation"))
    }
  }
}

export default new DwollaCostumersAPI()