import { Module } from '@nestjs/common';
import { CalculateController } from './controller/calculate.controller';
import { CalculateService } from './service/calculate.service';

@Module({
  imports: [],
  controllers: [CalculateController],
  providers: [CalculateService],
})
export class CalculateModule {}
