// interface IbaseErrorClass{
//     name: string,
//     statusCode: number,
//     description: string,
//     details: string
// }
class BaseError extends Error {
    statusCode;
    details;
    constructor(name:string, statusCode: number, description: string, details: string ) {
      super(description);
      this.name = name;
      this.statusCode = statusCode;
      this.details = details;
      // Error.captureStackTrace(this);
    }
  }
  module.exports = BaseError;