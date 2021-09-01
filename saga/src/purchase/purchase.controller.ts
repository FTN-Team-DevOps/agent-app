import {
  Body,
  Controller,
  Get,
  Post,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { Purchase } from './purchase.model';
import { PurchaseService } from './purchase.service';

@Controller('/purchase')
export class PurchaseController {
  constructor(private readonly userService: PurchaseService) {}

  @Get()
  async getAll(@Headers() headers: any): Promise<Purchase[]> {
    return await this.userService.findAll(headers.authorization);
  }

  @Get('/sold')
  async getSold(@Headers() headers: any): Promise<Purchase[]> {
    return await this.userService.findBySeller(headers.authorization);
  }

  @Post()
  async create(
    @Headers() headers: any,
    @Body('purchase') purchase: Purchase,
  ): Promise<Purchase> {
    if (purchase) {
      return await this.userService.create(purchase, headers.authorization);
    }
    throw new BadRequestException();
  }
}
