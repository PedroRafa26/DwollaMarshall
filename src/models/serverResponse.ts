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

export type ServerCode = '200' | '400' | '500' | '408' ;

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