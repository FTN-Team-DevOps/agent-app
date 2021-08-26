import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseController } from './purchase.controller';
import { Purchase, PurchaseSchema } from './purchase.model';
import { PurchaseService } from './purchase.service';

describe('PurchaseController', () => {
  let controller: PurchaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([
          { name: Purchase.name, schema: PurchaseSchema },
        ]),
      ],
      controllers: [PurchaseController],
      providers: [PurchaseService],
    }).compile();

    controller = module.get<PurchaseController>(PurchaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
