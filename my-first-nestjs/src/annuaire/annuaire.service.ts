import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Annuaire } from './annuaire.entity';
import { paginate,Pagination,IPaginationOptions,} from 'nestjs-typeorm-paginate';


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

    async findByDepartement(options: IPaginationOptions,_Libelle_departement : string) : Promise<Pagination<Annuaire>> {
        return await paginate<Annuaire>(this.annuaireRepository, options, {where:{Libelle_departement:_Libelle_departement}});
    }

    async findByType(options: IPaginationOptions, Type_etablissement: string): Promise<Pagination<Annuaire>> {
        return paginate<Annuaire>(this.annuaireRepository, options, 
            {where : {Type_etablissement:Type_etablissement}}
        );
    }

    findByid(Identifiant_de_l_etablissement: string): Promise<Annuaire> {
        return this.annuaireRepository.findOne({Identifiant_de_l_etablissement})
    }

    findByPosition(latitude: number, longitude: number) : Promise<Annuaire> {
        const position : string = `${latitude},${longitude}`;
        return this.annuaireRepository.findOne({position});
    }

    findByPostal(options: IPaginationOptions, Code_postal: number) : Promise<Pagination<Annuaire>> {
        return paginate<Annuaire>(this.annuaireRepository, options,{where:{Code_postal:Code_postal}});
    }


}
