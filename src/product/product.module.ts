import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'})
    ],
    controllers: [
        ProductController,
    ],
    providers: [ProductService],
})
export class ProductModule { }
