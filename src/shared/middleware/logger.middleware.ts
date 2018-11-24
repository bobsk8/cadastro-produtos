import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      console.log(`Request...`);
      next();
    };
  }
}

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   async resolve(name: string): Promise<MiddlewareFunction> {
//     await this.someAsyncJob();

//     return async (req, res, next) => {
//       await this.someAsyncJob();
//       console.log(`[${name}] Request...`); // [ApplicationModule] Request...
//       next();
//     };
//   }

//   someAsyncJob(): Observable<any> {
//     return of({console.log('foi')});
//   }

// }
