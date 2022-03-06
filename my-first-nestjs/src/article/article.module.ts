import { Module } from '@nestjs/common';
import { Author } from '../author/author.entity';
import { ArticleService } from './article.service';
import { AuthorController } from '../author/author.controller';
import { ArticleController } from './article.controller';
import { AuthorService } from 'src/author/author.service';
import { Article } from './article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Article]),TypeOrmModule.forFeature([Author])],
  providers: [ArticleService, AuthorService],
  controllers: [AuthorController, ArticleController]
})
export class ArticleModule {}
