import { Controller, Get, Post, Param, Query, Body, ParseIntPipe, DefaultValuePipe, Res } from '@nestjs/common';
import { AnnuaireService } from '../annuaire/annuaire.service';
import { Annuaire } from './annuaire.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('annuaire')
@Controller('annuaire')
export class AnnuaireController {
    constructor(private readonly annuaireService : AnnuaireService) {}

    @Get('pagination')
    getAnnuaire(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10): Promise<Pagination<Annuaire>> {
        limit = limit > 100 ? 100 : limit;
        return this.annuaireService.paginate({page,limit});
    }

    @Get('id/:id')
    getAnnuaireById(@Param('id') id: string, @Res() response: Response) {
        return this.annuaireService.findByid(id);
    }

    @Get('Code_postal/:Code_postal')
    getAnnuaireByPostalCode(@Param('Code_postal') Code_postal: number) {
        return this.annuaireService.findByPostal(Code_postal);
    }

    @Get('Type_etablissement/:Type_etablissement')
    getAnnuaireByType(@Param('Type_etablissement') Type_etablissement: string) {
        return this.annuaireService.findByType(Type_etablissement);
    }
    
    @Get('Libelle_departement/:Libelle_departement')
    getByDepartement() {

    }
    
    /*
    @Get('')
    getByGeolocalisation(@Param(''))
    */

    @Post()
    createAnnuaire(@Body() annuaire: Annuaire, @Res() response: Response) {
        console.log('response.req',response.req);
        return this.annuaireService.create(annuaire);
    }
}
