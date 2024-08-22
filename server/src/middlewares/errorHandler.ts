import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Your error handling logic here
  res.status(500).json({ error: err.message });
};

export default errorHandler;
