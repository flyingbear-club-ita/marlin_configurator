import { ApiError } from "./ApiError";

export class NotImplementedError extends ApiError {
  constructor(message, apiCode, data){
    super (
      message || 'Funzione non ancora implementata',
      apiCode || 'E_NOT_IMPLEMENTED',
      data    || undefined,
      501
    )
  }
}
