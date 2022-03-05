/**
 * Errors managed by the API
 */
export class ApiError extends Error{
  /**
   * Create an ApiError
   * @param {string} apiCode
   * @param {string} message
   * @param {Object} data
   * @param {Number} httpCode
   */
  constructor(message, apiCode, data, httpCode, debugData){
    super (message || 'An unexpected error occurred');

    this.apiCode   = apiCode   || 'E_INTERNAL_SERVER_ERROR';
    this.name      = this.apiCode;
    this.data      = data      || undefined;
    this.httpCode  = httpCode  || 500;
    this.debugData = Object.assign({ stack: this.stack }, debugData);
  }
}
