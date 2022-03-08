import { Controller, Get, Post, Param, Query, Body, ParseIntPipe, DefaultValuePipe, Res, Header, HttpException, HttpStatus } from '@nestjs/common';
import { AnnuaireService } from '../annuaire/annuaire.service';
import { Annuaire } from './annuaire.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('annuaire')
@Controller('annuaire')
export class AnnuaireController {
    constructor(private readonly annuaireService : AnnuaireService) {}

    /**
     * Indique si la période de l'instance est dans la période spécifiée
     * @param _dateRange La période
     * 
     */
    @Get('pagination')
    getAnnuaire(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10): Promise<Pagination<Annuaire>> {
        limit = limit > 100 ? 100 : limit;
        return this.annuaireService.paginate({page,limit});
    }

    /**
     * 
     * @param {string} _id unique identifier
     */
    @Get('id/:id')
    @Header('Content-Type', 'application/json')
    getAnnuaireById(@Param('id') _id: string) {
        // throw new HttpException('No content', HttpStatus.NO_CONTENT)
        return this.annuaireService.findByid(_id);
    }

    /**
     * Searching for the Postal Code
     * @param {number} _Code_postal Postal Code
     */
    @Get('Code_postal/:Code_postal')
    getAnnuaireByPostalCode(@Param('Code_postal') _Code_postal: number) {
        return this.annuaireService.findByPostal(_Code_postal);
    }

    /**
     * Searching for the type of schools
     * @param {string} _Type_etablissement type of schools
     */
    @Get('Type_etablissement/:Type_etablissement')
    getAnnuaireByType(@Param('Type_etablissement') _Type_etablissement: string) {
        return this.annuaireService.findByType(_Type_etablissement);
    }


    /**
     * Searching for administrative divisions
     * @param {string} _Libelle_departement type of schools
     */
    @Get('Libelle_departement/:Libelle_departement')
    getByDepartement(@Param('Libelle_departement') _Libelle_departement: string) {
        return this.annuaireService.findByDepartement(_Libelle_departement);
    }

    /**
     * Search by geolocation.
     * @param {number} _latitude 
     * @param {number} _longitude 
     */
    @Get('position/:latitude/:longitude')
    getByPosition(@Param('latitude') _latitude: number, @Param('longitude') _longitude: number) {
        return this.annuaireService.findByPosition(_latitude, _longitude);
    }

    /**
     * Search by geolocation.
     * @param {Annuaire} _annuaire
     */
    @Post()
    createAnnuaire(@Body() _annuaire: Annuaire, @Res() response: Response) {
        console.log('response.req',response.req);
        return this.annuaireService.create(_annuaire);
    }
}
