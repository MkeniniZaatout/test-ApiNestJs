import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { Author } from './author.entity';
import { AuthorService } from './author.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('author')
@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService){}

    @Get()
    getAuthor() {
        return this.authorService.findAll();
    }

    @Get(':id')
    getAuthorById(@Param('id') id: number) {
        return this.authorService.findById(id);
    }

    @Post()
    createAuthor(@Body() body: Author){
        return this.authorService.create(body);
    }

}
