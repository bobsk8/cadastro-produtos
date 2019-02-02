import { Injectable } from '@nestjs/common';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductService {
    private products: Product[] = [];

    create(product: Product) {
        this.products.push(product);
    }

    findById(id: number) {
        return this.products.filter(product => product.id === id)[0];
    }

    delete(id: number) {
        this.products = this.products.filter(product => product.id === id);
    }

    update(id: number, updateProductDto: Product) {
        this.products.forEach((product: any) => {
            if (product.id == id) {
                product.id = updateProductDto.id;                
                product.name = updateProductDto.name;
                product.price = updateProductDto.price;
            }
        });
    }

    findAll(): Product[] {
        return this.products;
    }
}
