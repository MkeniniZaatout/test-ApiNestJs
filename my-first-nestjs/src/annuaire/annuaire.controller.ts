import { Controller, Get, Post, Param, Query, Body, ParseIntPipe, DefaultValuePipe, Res, Header, HttpException, HttpStatus, Req } from '@nestjs/common';
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
     * Find school by unique identifier.
     * @param {string} _id unique identifier
     */
    @Get('id/:id')
    getAnnuaireById(@Param('id') _id: string) {
        return this.annuaireService.findByid(_id);
    }

    /**
     * Searching by the Postal Code 
     * @param {number} _Code_postal Postal Code
     */
    @Get('Code_postal/:Code_postal')
    getAnnuaireByPostalCode(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    @Param('Code_postal') _Code_postal: number) {
        return this.annuaireService.findByPostal({page, limit},_Code_postal);
    }

    /**
     * Searching by the type of schools
     * @param {string} _Type_etablissement type of schools
     */
    @Get('Type_etablissement/:Type_etablissement')
    getAnnuaireByType(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10, 
    @Param('Type_etablissement') _Type_etablissement: string) {
        return this.annuaireService.findByType({page,limit},_Type_etablissement);
    }

    /**
     * Searching for administrative divisions
     * @param {string} _Libelle_departement type of schools
     */
    @Get('Libelle_departement/:Libelle_departement')
    getByDepartement(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10, @Param('Libelle_departement') _Libelle_departement: string) {
        return this.annuaireService.findByDepartement({page,limit}, _Libelle_departement);
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
}
