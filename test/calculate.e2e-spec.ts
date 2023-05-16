import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule as CalculateModule } from '../src/app.module';

describe('CalculateController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CalculateModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/sum (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/sum')
      .send({ number1: 2, number2: 3 });

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('5');
  });
});
