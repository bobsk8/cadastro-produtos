import { Injectable, Dependencies } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductInterface } from './interface/product.interface';
import { Product } from './model/product.entity';

@Injectable()
@Dependencies(InjectRepository(Product))
export class ProductService {
    private products: ProductInterface[] = [];
    
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
      ) {}
    
    

    create(product: ProductInterface) {
        this.products.push(product);
    }

    findById(id: number) {
        return this.products.filter(product => product.id === id)[0];
    }

    delete(id: number) {
        this.products = this.products.filter(product => product.id === id);
    }

    update(id: number, updateProductDto: ProductInterface) {
        this.products.forEach((product: any) => {
            if (product.id == id) {
                product.id = updateProductDto.id;                
                product.name = updateProductDto.name;
                product.price = updateProductDto.price;
            }
        });
    }

    findAll(): ProductInterface[] {
        return this.products;
        // return await this.productRepository.find();
    }
}
