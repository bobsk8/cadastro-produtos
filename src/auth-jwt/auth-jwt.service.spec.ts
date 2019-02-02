import { Test, TestingModule } from '@nestjs/testing';
import { AuthJWTService } from './auth-jwt.service';

describe('AuthJWTService', () => {
  let service: AuthJWTService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthJWTService],
    }).compile();
    service = module.get<AuthJWTService>(AuthJWTService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
