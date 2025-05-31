import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { AppError } from '../utils/AppError';
import { verifyToken, extractTokenFromHeader } from '../utils/jwt';

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // 1) Get token from header
    const token = extractTokenFromHeader(req.headers.authorization);

    // 2) Verify token
    const decoded = verifyToken(token);

    // 3) Check if user still exists
    const user = await User.findById(decoded.userId);
    if (!user) {
      throw new AppError('User no longer exists', 401);
    }

    // 4) Add user to request object
    req.user = user;
    next();
  } catch (error) {
    next(new AppError('Not authorized to access this route', 401));
  }
};

// Middleware to restrict access to specific roles
export const restrictTo = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('Not authorized to perform this action', 403));
    }
    next();
  };
}; 