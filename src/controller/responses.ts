import { ServerResponse, ServerCode } from "../models/serverResponse";

/**
 * Class that handles all the server's responses.
 */
class ApiResponse {
  response: ServerResponse;
  info: any;
  /**
   * 
   * @param code Code defining the status of the response.
   * @param message Brief message of the response.
   * @param info (optional) Aditional data for the reponse.
   */
  constructor(code: ServerCode, message: string, info?: any) {
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

  static success(message: string, info?: any): ServerResponse {
    return new ApiResponse('200', message, info).response;
  }

  /**
   * Creates a ServerResponse with the given data.
   * @param message Message for the response.
   * @param info (optional) Aditional information for the response.
   * 
   * @returns a `ServerResponse` with `90` status code.
   */

  static timeout(message: string, info?: any): ServerResponse {
    return new ApiResponse('408', message, info).response;
  }

  /**
   * Creates a ServerResponse with the given data.
   * @param message Message for the response.
   * @param info (optional) Aditional information for the response.
   * 
   * @returns a `ServerResponse` with `40` status code.
   */

  static badRequest(message: string, info?: any): ServerResponse {
    return new ApiResponse('400', message, info).response;
  }

  /**
   * Creates a ServerResponse with the given data.
   * @param message Message for the response.
   * @param info (optional) Aditional information for the response.
   * 
   * @returns a `ServerResponse` with `50` status code.
   */

  static internal(message: string, info?: any): ServerResponse {
    return new ApiResponse('500', message, info).response;
  }
}

export default ApiResponse;