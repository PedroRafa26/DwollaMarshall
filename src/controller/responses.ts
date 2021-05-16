import { ServerResponse, ServerCode, ServerDwollaCostumerResponse, ServerDwollaCustomersCode } from "../models/serverResponse";

/**
 * Class that handles all the server's responses.
 */

export type InternalResponses = ServerResponse | ServerDwollaCostumerResponse
export type InternalCodes = ServerCode | ServerDwollaCustomersCode

class ApiResponse {
  response:  InternalResponses;
  info: any;
  /**
   * 
   * @param code Code defining the status of the response.
   * @param message Brief message of the response.
   * @param info (optional) Aditional data for the reponse.
   */
  constructor(code: InternalCodes, message: string, info?: any) {
    this.response = {
      code,
      message,
      info
    }
    this.info = info;
  }

  /**
   * Creates a ServerResponse with the given data.
   * @param message Message for the response.
   * @param info (optional) Aditional information for the response.
   * 
   * @returns a `ServerResponse` with `00` status code.
   */

  static success(message: string, info?: any): InternalResponses {
    return new ApiResponse('200', message, info).response;
  }

  /**
   * Creates a ServerResponse with the given data.
   * @param message Message for the response.
   * @param info (optional) Aditional information for the response.
   * 
   * @returns a `ServerResponse` with `90` status code.
   */

  static timeout(message: string, info?: any): InternalResponses{
    return new ApiResponse('408', message, info).response;
  }

  /**
   * Creates a ServerResponse with the given data.
   * @param message Message for the response.
   * @param info (optional) Aditional information for the response.
   * 
   * @returns a `ServerResponse` with `40` status code.
   */

  static badRequest(message: string, info?: any): InternalResponses {
    return new ApiResponse('400', message, info).response;
  }

  /**
   * Creates a ServerResponse with the given data.
   * @param message Message for the response.
   * @param info (optional) Aditional information for the response.
   * 
   * @returns a `ServerResponse` with `50` status code.
   */

  static internal(message: string, info?: any): InternalResponses {
    return new ApiResponse('500', message, info).response;
  }

  static fromDwollaAPI(message: string, status: InternalCodes, info?: any) : InternalResponses {
    return new ApiResponse(status, message, info).response
  }
}

export default ApiResponse