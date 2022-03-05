import { ApiError } from './ApiError';

export class InternalServerError extends ApiError {
  constructor(apiCode, debugData){
    super (
      undefined,            // Message for internal errors is already defined in ApiError
      apiCode || undefined, // E_INTERNAL_SERVER_ERROR is already the default code in ApiError
      undefined,
      500,
      debugData
    )
  }
}
