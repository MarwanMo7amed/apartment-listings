import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { AppErrorResponse } from '../utils/AppErrorResponse';

export const errorHandler : ErrorRequestHandler = (
  err: Error | AppErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppErrorResponse) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
    return;
  }

  console.error('Unexpected error occured:', err);
    res.status(500).json({
    status: 'error',
    message: 'Something went wrong. Please try again later.',
  });
};
