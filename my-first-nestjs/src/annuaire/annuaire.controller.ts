import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { AnnuaireService } from '../annuaire/annuaire.service';
import { Annuaire } from './annuaire.entity';

@Controller('annuaire')
export class AnnuaireController {
    constructor(private readonly annuaireService : AnnuaireService) {

    }

    @Get()
    getAnnuaire() {
        return this.annuaireService.findAll();
    }

    @Get(':id')
    getAnnuaireById(@Param('id') id: string) {
        return this.annuaireService.findByid(id);
    }

    @Post()
    createAnnuaire(@Body() body: Annuaire) {
        return this.annuaireService.create(body);
    }
}
