/* eslint-disable prettier/prettier */
import { Request, Response, NextFunction } from 'express';
import { NestMiddleware } from '@nestjs/common';

export default class FirstMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method} at ${req.url} received]`);
    next();
  }
}
