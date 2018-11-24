import { Injectable } from '@nestjs/common';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductService {
    private readonly products: Product[] = [];

    create(product: Product) {
        this.products.push(product);
    }

    findById(id: number) {
        return this.products.filter(product => product.id === id)[0];
    }

    delete(id: number) {
        return this.products.filter(product => product.id === id);
    }

    update(id: number, updateProductDto: Product) {
        return updateProductDto;
    }

    findAll(): Product[] {
        return this.products;
    }
}
