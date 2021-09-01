import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Headers,
  Delete,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { ProductDTO } from './dto/product.dto';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAll(@Headers() headers: any): Promise<Product[]> {
    return await this.productService.findAll(headers.authorization);
  }

  @Get('/my')
  async getMyProducts(@Headers() headers: any): Promise<Product[]> {
    return await this.productService.findMyProducts(headers.authorization);
  }

  @Get(':id')
  async getOne(
    @Headers() headers: any,
    @Param('id') params: string,
  ): Promise<Product> {
    return await this.productService.findOne(params, headers.authorization);
  }

  @Post()
  async create(
    @Headers() headers: any,
    @Body('product') product: ProductDTO,
  ): Promise<Product> {
    if (product) {
      return await this.productService.create(product, headers.authorization);
    }
    throw new BadRequestException();
  }

  @Post('/update')
  async update(
    @Headers() headers: any,
    @Body('productUpdate') productUpdate: ProductDTO,
  ): Promise<Product> {
    if (productUpdate) {
      return await this.productService.update(
        productUpdate._id,
        productUpdate,
        headers.authorization,
      );
    }
    throw new BadRequestException();
  }

  @Delete(':id')
  async delete(
    @Headers() headers: any,
    @Param('id') id: string,
  ): Promise<Product> {
    return await this.productService.delete(id, headers.authorization);
  }
}
