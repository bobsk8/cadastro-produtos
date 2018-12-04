import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ProductModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'products', method: RequestMethod.ALL });
  }
}
