import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { ProductService } from 'src/product/product.service';
import { Purchase, PurchaseDocument } from './purchase.model';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectModel(Purchase.name)
    private readonly purchaseModel: Model<PurchaseDocument>,
    private readonly authService: AuthService,
    private readonly productService: ProductService,
  ) {}

  async findAll(token: string): Promise<Purchase[]> {
    const auth = await this.authService.getByToken(token);
    if (auth) {
      return await this.purchaseModel.find({ customer: auth.user }).exec();
    } else {
      throw new UnauthorizedException();
    }
  }

  async findBySeller(token: string): Promise<Purchase[]> {
    const auth = await this.authService.getByToken(token);
    if (auth) {
      return await this.purchaseModel.find({ seller: auth.user }).exec();
    } else {
      throw new UnauthorizedException();
    }
  }

  async create(purchase: Purchase, token: string): Promise<Purchase> {
    const auth = await this.authService.getByToken(token);
    if (auth) {
      const product = await this.productService.findOne(
        purchase.product,
        token,
      );
      await this.productService.handlePurchase(
        purchase.product,
        product.count - 1,
      );
      return this.purchaseModel.create({ ...purchase, seller: product.seller });
    } else {
      throw new UnauthorizedException();
    }
  }
}
