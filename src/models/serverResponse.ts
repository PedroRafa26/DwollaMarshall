/**
   * Code for results from server.
   * 
   * 200: All good.
   * 
   * 408: Request Timeout.
   * 
   * 400: Error from request.
   * 
   * 500: Error from server.
   * 
   */

export type ServerCode = '200' | '400' | '500' | '408';

/**
 * Code for result from Dwolla Servers
 * 
 * 201: Created => Customer created.
 * 
 * 400: BadRequest / ValidationError => The request body contains bad syntax or is incomplete / Reference the errors section for list of possible _embedded validation errors.
 * 
 * 403: Forbidden => Not authorized to create customers.
 * 
 * 404: NotFound => Customer not found.
 * 
 */
export type ServerDwollaCustomersCode = '201' | '400' | '403' | '404';

export interface ServerResponse {
  /**
   * Code for response.
   */
  code: ServerCode,
  /**
   * Information about the operation.
   */
  message: string,
  info?: any
};

export interface ServerDwollaCostumerResponse {
  /**
   * Code for response.
   */
  code: ServerDwollaCustomersCode
  /**
   * Information about the operation.
   */
  message: string,
  info?: any
}