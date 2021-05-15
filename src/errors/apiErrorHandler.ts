import ApiResponse from '../controller/responses';
import ApiError from './ApiError';

function apiErrorHandler(error: Error | ApiError, _req: any, res: any, _next: any) {
  if (error instanceof ApiError) {
    // console.log('ApiError detected', error);
    res.status(error.code).json(error.messageAPI);
    return;
  }
  res.status(500).json(ApiResponse.internal('Not expected Error', error));
}

export default apiErrorHandler;