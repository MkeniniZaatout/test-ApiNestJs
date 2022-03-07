import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Annuaire } from './annuaire.entity';

@ApiTags('annuaire')
@Injectable()
export class AnnuaireService {
    constructor(
        @InjectRepository(Annuaire)
        private readonly annuaireRepository : Repository<Annuaire>
    ){}

    findAll(): Promise<Annuaire[]> {
        return this.annuaireRepository.find();
    }

    findByid(id: string): Promise<Annuaire> {
        return this.annuaireRepository.findOne(id)
    }

    create(annuaire: Annuaire) : Promise<Annuaire> {
        return this.annuaireRepository.save(annuaire);

    }
}
