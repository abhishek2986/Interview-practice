import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';


@Injectable()
export class BookMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction ) {
    console.log(req.method);
    console.log(req.originalUrl);
    console.log(new Date());
    next();
  }
}
