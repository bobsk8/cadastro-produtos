import { Get, Controller, Post, Body, Query, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/products')
@UseGuards(AuthGuard())
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    async findAll(@Query() query) {
        return this.productService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return this.productService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updateProductDto: ProductDTO) {
        return this.productService.update(id, updateProductDto);
    }

    @Delete(':id')
    async remove(@Param('id') id) {
        return this.productService.delete(id);
    }

    @Post()
    async create(@Body() createProductDto: ProductDTO) {
        this.productService.create(createProductDto);
    }
}
