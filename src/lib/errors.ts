class BaseError extends Error {
  name = this.constructor.name;
}

interface ApiErrorProps {
  message: string;
  httpStatus: number;
  type: string;
}
class ApiError extends BaseError {
  httpStatus: number;
  type: string;

  constructor({ httpStatus, type, message }: ApiErrorProps) {
    super(message);
    this.httpStatus = httpStatus;
    this.type = type;
  }
}

class NetworkError extends BaseError {}

export { BaseError, ApiError, NetworkError };
