import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Double, Repository } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { Annuaire } from './annuaire.entity';
import { paginate,Pagination,IPaginationOptions,} from 'nestjs-typeorm-paginate';
import { ApiProperty } from '@nestjs/swagger';
import { resolve } from 'path';


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
        return paginate<Annuaire>(this.annuaireRepository,options, {Libelle_departement:_Libelle_departement});
    }

    async findByType(options: IPaginationOptions, Type_etablissement: string): Promise<Pagination<Annuaire>> {
        return paginate<Annuaire>(this.annuaireRepository, options, 
            {Type_etablissement:Type_etablissement}
        )
        // return this.annuaireRepository.find({ Type_etablissement })
    }

    findByid(Identifiant_de_l_etablissement: string): Promise<Annuaire> {
        /*return new Promise(resolve => {
            const schoolAnnuaire = this.annuaireRepository.findOne({Identifiant_de_l_etablissement});
            if(!schoolAnnuaire) {
                console.log(schoolAnnuaire);
                throw new HttpException('No Content : School not exist', 204);
            }
            resolve(schoolAnnuaire);
        });*/
        return this.annuaireRepository.findOne({Identifiant_de_l_etablissement})
    }

    findByPosition(latitude: number, longitude: number) : Promise<Annuaire> {
        const position : string = `${latitude},${longitude}`;
        return this.annuaireRepository.findOne({position});
    }

    findByPostal(Code_postal: number) : Promise<Annuaire[]> {
        //return paginate<Annuaire>(this.annuaireRepository, options, {});
        return this.annuaireRepository.find({ Code_postal })
    }


}
