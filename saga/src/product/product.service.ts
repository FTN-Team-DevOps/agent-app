import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { ProductDTO } from './dto/product.dto';
import { Product, ProductDocument } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    private readonly authService: AuthService,
  ) {}

  async findAll(token: string): Promise<Product[]> {
    const auth = await this.authService.getByToken(token);
    if (auth) {
      return this.productModel.find().exec();
    } else {
      throw new UnauthorizedException();
    }
  }

  async findMyProducts(token: string): Promise<Product[]> {
    const auth = await this.authService.getByToken(token);
    if (auth) {
      return this.productModel.find({ seller: auth.user }).exec();
    } else {
      throw new UnauthorizedException();
    }
  }

  async findOne(_id: string, token: string): Promise<Product> {
    const auth = await this.authService.getByToken(token);
    if (auth) {
      return this.productModel.findOne({ _id });
    } else {
      throw new UnauthorizedException();
    }
  }

  async create(productDTO: ProductDTO, token: string): Promise<Product> {
    const auth = await this.authService.getByToken(token);
    if (auth) {
      return await this.productModel.create({
        ...productDTO,
        seller: auth.user,
      });
    } else {
      throw new UnauthorizedException();
    }
  }

  async update(
    _id: string,
    product: ProductDTO,
    token: string,
  ): Promise<Product> {
    const auth = await this.authService.getByToken(token);
    if (auth) {
      return this.productModel.findOneAndUpdate(
        { _id },
        { $set: { ...product } },
        { new: true },
      );
    } else {
      throw new UnauthorizedException();
    }
  }

  async handlePurchase(_id: string, count: number): Promise<Product> {
    return this.productModel.findOneAndUpdate(
      { _id },
      { $set: { count } },
      { new: true },
    );
  }

  async delete(_id: string, token: string): Promise<Product> {
    const auth = await this.authService.getByToken(token);
    if (auth) {
      return this.productModel.findOneAndDelete({ _id });
    } else {
      throw new UnauthorizedException();
    }
  }
}
