function normalizeError(e: unknown): BaseError {
  if (e instanceof BaseError) return e;
  if (e instanceof Error) return new BaseError(e.message);
  return new BaseError("Something went wrong");
}

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

export { BaseError, ApiError, NetworkError, normalizeError };
