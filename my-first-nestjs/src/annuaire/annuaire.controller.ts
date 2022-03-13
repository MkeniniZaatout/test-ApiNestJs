import { 
    Controller, 
    Get, 
    Param, 
    Query, 
    ParseIntPipe, 
    DefaultValuePipe 
} from '@nestjs/common';
import { AnnuaireService } from '../annuaire/annuaire.service';
import { Annuaire } from './annuaire.entity';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ApiTags, ApiQuery, ApiParam } from '@nestjs/swagger';

@ApiTags('annuaire')
@Controller('annuaire')
export class AnnuaireController {
    constructor(private readonly annuaireService : AnnuaireService) {}

    /**
     * Return list of school
     * @param page La période
     * @param limit La période
     */
    @Get()
    @ApiQuery({name:"page",type:"number",description:'Number of page'})
    @ApiQuery({name:"limit",type:"number",description:'Range'})
    getAnnuaire(@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10): Promise<Pagination<Annuaire>> {
        limit = limit > 100 ? 100 : limit;
        return this.annuaireService.paginate({page,limit,countQueries:false});
    }

    /**
     * Find school by unique identifier.
     * @param {string} _id unique identifier
     */
    @Get('id/:id')
    @ApiParam({name:"id",type:"string",description:"ID of School"})
    getAnnuaireById(@Param('id') _id: string) {
        return this.annuaireService.findByid(_id);
    }

    /**
     * Searching by the Zip Code 
     * @param {number} _Code_postal Postal Code
     */
    @Get('Code_postal/:Code_postal')
    @ApiParam({name:"Code_postal",type:"number",description:"School's zip code"})
    @ApiQuery({name:"page",type:"number",description:'Number of page'})
    @ApiQuery({name:"limit",type:"number",description:'Range'})
    getAnnuaireByPostalCode(@Param('Code_postal') _Code_postal: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    ) {
        return this.annuaireService.findByPostal({page, limit},Number(_Code_postal));
    }

    /**
     * Searching by type of schools.
     * @param {string} _Type_etablissement type of schools
     */
    @Get('Type_etablissement/:Type_etablissement')
    @ApiParam({name:"Type_etablissement",type:"string",description:"School type"})    
    @ApiQuery({name:"page",type:"number",description:'Number of page'})
    @ApiQuery({name:"limit",type:"number",description:'Range'})
    getAnnuaireByType(@Param('Type_etablissement') _Type_etablissement: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    ) {
        return this.annuaireService.findByType({page,limit,countQueries:false},_Type_etablissement);
    }

    /**
     * Searching by departement.
     * @param {string} _Libelle_departement type of schools
     */
    @Get('Libelle_departement/:Libelle_departement')
    @ApiParam({name:"Libelle_departement",type:"string",description:'Department name'})
    @ApiQuery({name:"page",type:"number",description:'Number of page'})
    @ApiQuery({name:"limit",type:"number",description:'Range'})
    getByDepartement(@Param('Libelle_departement') _Libelle_departement: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10) {
        return this.annuaireService.findByDepartement({page,limit, countQueries:false}, _Libelle_departement);
    }

    /**
     * Search by geolocation with lattitude and longitude.
     * @param {number} _latitude 
     * @param {number} _longitude 
     */
    @Get('position/:latitude/:longitude')
    @ApiParam({name:"longitude",type:"number",description:"Longitude for school's position"})
    @ApiParam({name:"latitude",type:"number",description:"Latitude for school's position"})
    getByPosition(@Param('latitude') _latitude: number, @Param('longitude') _longitude: number) {
        return this.annuaireService.findByPosition(_latitude, _longitude);
    }
}
