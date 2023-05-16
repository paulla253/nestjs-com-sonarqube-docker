import { Body, Controller, Get } from '@nestjs/common';
import { CalculateService } from '../service/calculate.service';

export type TValues = {
  number1: number;
  number2: number;
};

@Controller()
export class CalculateController {
  constructor(private readonly calculateService: CalculateService) {}

  @Get('/sum')
  public sum(@Body() request: TValues): number {
    return this.calculateService.sum(request.number1, request.number2);
  }
}
