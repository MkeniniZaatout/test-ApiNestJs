import { Test, TestingModule } from '@nestjs/testing';
import { AnnuaireController } from './annuaire.controller';

describe('AnnuaireController', () => {
  let controller: AnnuaireController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnuaireController],
    }).compile();

    controller = module.get<AnnuaireController>(AnnuaireController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
