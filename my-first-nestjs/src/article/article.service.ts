import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../article/article.entity';

@Injectable()
export class ArticleService {

    constructor(
        @InjectRepository(Article)
        private readonly articleRepository : Repository<Article> )
    {}

    create(article: Article) : Promise<Article> {
        return this.articleRepository.save(article);
    }

    findAll(): Promise<Article[]> {
        return this.articleRepository.find();
    }

    findByid(id: number): Promise<Article> {
        return this.articleRepository.findOne(id)
    }
}
