import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth-bearer/auth.module';
import { AuthJWTModule } from './auth-jwt/auth-jwt.module';

@Module({
  imports: [
    ProductModule,
    UserModule,
    // AuthModule,
    AuthJWTModule,
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
