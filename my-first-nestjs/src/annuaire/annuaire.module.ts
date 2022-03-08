import { Module } from '@nestjs/common';
import { AnnuaireController } from './annuaire.controller';
import { AnnuaireService } from './annuaire.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Annuaire } from './annuaire.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Annuaire])],
  controllers: [AnnuaireController],
  providers: [AnnuaireService]
})
export class AnnuaireModule {}
