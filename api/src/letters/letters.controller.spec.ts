import { Test, TestingModule } from '@nestjs/testing';
import { LettersController, VerifyController } from './letters.controller';
import { LettersService } from './letters.service';
import { PrismaService } from '../prisma/prisma.service';

describe('LettersController', () => {
  let controller: LettersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LettersController, VerifyController],
      providers: [
        { provide: LettersService, useValue: {} },
        { provide: PrismaService, useValue: {} }
      ],
    }).compile();

    controller = module.get<LettersController>(LettersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
