import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class AllExceptionFilter<T> implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    // const status = exception.getStatus();
    const message = exception.message.message;

    response
      // .status(status)
      .json({
        // statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        type: message,
      });
  }
}
