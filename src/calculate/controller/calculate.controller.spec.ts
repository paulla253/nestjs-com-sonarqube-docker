import { Test, TestingModule } from '@nestjs/testing';
import { CalculateService } from '../service/calculate.service';
import { CalculateController } from './calculate.controller';

describe('CalculateController', () => {
  let calculateController: CalculateController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CalculateController],
      providers: [CalculateService],
    }).compile();

    calculateController = app.get<CalculateController>(CalculateController);
  });

  describe('sum', () => {
    it('should return 5 if parameter is 2 and 3', () => {
      expect(calculateController.sum({ number1: 2, number2: 3 })).toBe(5);
    });
  });
});
