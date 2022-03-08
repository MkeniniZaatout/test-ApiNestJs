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

    findByType(Type_etablissement : string): Promise<Annuaire[]> {
        return this.annuaireRepository.find({ Type_etablissement })
    }

    findByid(Identifiant_de_l_etablissement: string): Promise<Annuaire> {
        return this.annuaireRepository.findOne({Identifiant_de_l_etablissement})
    }

    findByGeolocalisation() : Promise<Annuaire[]> {
        return this.annuaireRepository.find({});
    }

    create(annuaire: Annuaire) : Promise<Annuaire> {
        return this.annuaireRepository.save(annuaire);

    }

    findByPostal(Code_postal:number) : Promise<Annuaire[]> {
        return this.annuaireRepository.find({ Code_postal })
    }

    findByDepartement(Type_etablissement : string) : Promise<Annuaire []> {
        return this.annuaireRepository.find({Type_etablissement});
    }
}
