import { ApiError } from './ApiError';

export class BadRequestError extends ApiError {
  constructor(message, apiCode, data){
    super (
      message || 'La richiesta inviata al server non è corretta',
      apiCode || 'E_BAD_REQUEST',
      data    || undefined,
      400,
    )
  }
}