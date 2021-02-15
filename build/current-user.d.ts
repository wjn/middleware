import { Request, Response, NextFunction } from 'express';
interface UserPayload {
    id: string;
    email: string;
}
/**
 * Tell typescript that currentUser?: UserPayload is a property and type for
 * the Request datatype
 */
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
export declare const currentUser: (req: Request, res: Response, next: NextFunction) => void;
export {};
