import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Annuaire } from './annuaire.entity';
import { paginate,Pagination,IPaginationOptions,} from 'nestjs-typeorm-paginate';
import { ApiProperty } from '@nestjs/swagger';


@ApiTags('annuaire')
@Injectable()
export class AnnuaireService {
    constructor(
        @InjectRepository(Annuaire)
        private readonly annuaireRepository : Repository<Annuaire>
    ){}

    async paginate(options: IPaginationOptions): Promise<Pagination<Annuaire>> {
        return paginate<Annuaire>(this.annuaireRepository, options);
      }

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
