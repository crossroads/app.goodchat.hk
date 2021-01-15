class BaseError extends Error {
  name = this.constructor.name;
}

interface ApiErrorConstructor {
  message: string;
  httpStatus: number;
  type: string;
}
class ApiError extends BaseError {
  httpStatus: number;
  type: string;

  constructor({ httpStatus, type, message }: ApiErrorConstructor) {
    super(message);
    this.httpStatus = httpStatus;
    this.type = type;
  }
}

export { ApiError };
