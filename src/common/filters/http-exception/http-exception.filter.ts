import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();

    const contextResponse = context.getResponse();

    const contextRequest = context.getRequest();

    const exceptionStatusCode = exception.getStatus();

    const exceptionResponse = exception.getResponse();

    const error =
      typeof exceptionResponse === 'string'
        ? {
            message: exceptionResponse,
          }
        : {
            ...exceptionResponse,
          };

    contextResponse.status(exceptionStatusCode).json({
      ...error,
      path: contextRequest.url,
      dateTime: new Date(),
    });
  }
}
