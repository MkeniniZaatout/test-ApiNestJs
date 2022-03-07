import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('article')
@Controller('article')
export class ArticleController {
    constructor(private readonly articleService : ArticleService) {

    }

    @Get()
    getArticles() {
        return this.articleService.findAll();
    }

    @Get(':id')
    getArticlesById( @Param('id') id: number ) {
        return this.articleService.findByid(id);
    }

    @Post()
    createArticle(@Body() body: Article) {
        return this.articleService.create(body);
    }

}
