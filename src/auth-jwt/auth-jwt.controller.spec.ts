import { Test, TestingModule } from '@nestjs/testing';
import { AuthJwtController } from './auth-jwt.controller';

describe('AuthJwt Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AuthJwtController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AuthJwtController = module.get<AuthJwtController>(AuthJwtController);
    expect(controller).toBeDefined();
  });
});
