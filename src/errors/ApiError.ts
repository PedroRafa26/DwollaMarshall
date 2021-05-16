import { InternalResponses } from '../controller/responses';

type errorAPI = string | InternalResponses;

/**
 * Class for hadling API error from saldo rapido's server.
 */
class ApiError {
  code: number;
  messageAPI: errorAPI;

  /**
   * Crate an instance of `ApiError` class
   * @param code HTTP status code for the API error.
   * @param message Information about the error.
   * 
   * @returns an `ApiError` object.
   */

  constructor(code: number, message: errorAPI) {
    this.code = code;
    this.messageAPI = message;
  }

  /**
   * 
   * @param msg 
   */

  static badRequest(msg: errorAPI) {
    return new ApiError(400, msg);
  }

  static internal(msg: errorAPI) {
    return new ApiError(500, msg);
  }

  static unavailable(msg: errorAPI) {
    return new ApiError(503, msg);
  }

  static unauthorized(msg: errorAPI) {
    return new ApiError(401, msg);
  }

  static notFound(msg: errorAPI) {
    return new ApiError(404, msg);
  }
  static fromDwollaAPI(code: number, msg: errorAPI) {
    return new ApiError(code, msg)
  }
}

export default ApiError;