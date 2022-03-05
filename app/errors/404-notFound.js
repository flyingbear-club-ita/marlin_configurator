import { ApiError } from "./ApiError";

export class NotFoundError extends ApiError {
  constructor(message, apiCode, data){
    super (
      message || 'Risorsa non trovata',
      apiCode || 'E_NOT_FOUND',
      data    || undefined,
      404
    )
  }
}

export class RouteNotFoundError extends NotFoundError {
  /**
   * @param {string} route The requested route
   */
  constructor(route){
    super (
      'Percorso non trovato',
      'E_ROUTE_NOT_FOUND',
      { route: route }
    )
  }
}