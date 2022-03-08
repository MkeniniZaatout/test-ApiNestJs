import { Test, TestingModule } from '@nestjs/testing';
import { AnnuaireController } from './annuaire.controller';
import { Annuaire } from './annuaire.entity';
import { AnnuaireService } from './annuaire.service';
import uniqid from 'uniqid';

describe('AnnuaireController', () => {
  let controller: AnnuaireController;
  let service: AnnuaireService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnuaireController],
      providers:[AnnuaireService]
    }).compile();
    controller = module.get<AnnuaireController>(AnnuaireController);
    service = module.get<AnnuaireService>(AnnuaireService);
  });

  describe('getAnnuaireById', () => {
    it('should return an item of annuaire', async () => {
      // Arrange
      const result: any = {};
      const id: string = uniqid();
      // Act
      jest.spyOn(service, 'findByid').mockImplementation(() => result);
      // Assert
      expect(await controller.getAnnuaireById(id)).toBe(result);
    });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
