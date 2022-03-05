import mc from "../MarlinConfigurator";
import { ApiError, InternalServerError } from "../errors.module";

/**
 * Provides utility functions for handling errors
 */
export class ErrorHelper {
  /**
   * Create an ApiError from an existing error
   * @param {ApiError|Error|string|Object} error
   * @returns {ApiError} an ApiError that wraps the original one
   */
  static wrap (error) {
    // If error is an ApiError, leave it unchanged
    if (error instanceof ApiError)
      return error;

    // If error is an Error, create a new ApiError keeping its default message
    // and copying the original error in the field 'data'
    if (error instanceof Error) {
      let mcError;

      mcError = new InternalServerError();

      mcError.stack = error.stack;
      mcError.debugData = {
        originalError: error.name,
        stack: error.stack
      }

      return mcError;
    }

    console.error("Unhandled and unknown error: " + error); // Print just to make sure the error is not lost

    // If error is something else, create a generic InternalServerError
    return new InternalServerError (null, { originalError: error });
  }

  /**
   * Express middleware used to handle errors
   */
  static handler (err, req, res, next) {
    let mcError = ErrorHelper.wrap(err);

    let errorObject = {
      error: {
        apiCode: mcError.apiCode,
        message: mcError.message,
        data: mcError.data,
        debugData: mcError.debugData
      }
    }

    console.error (errorObject.error);

    res.status(mcError.httpCode);
    res.send(errorObject);
  }
}
