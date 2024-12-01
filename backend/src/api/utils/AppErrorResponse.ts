export class AppErrorResponse extends Error {
    public statusCode: number;
    public isOperational: boolean;
  
    constructor(message: string, statusCode: number, isOperational = true) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = isOperational;
  
      // Capture stack trace
      Error.captureStackTrace(this, this.constructor);
    }
  }
  