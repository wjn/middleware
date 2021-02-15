import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '@nielsendigital/errors';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // assumes currentUser middleware has already run.
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};
