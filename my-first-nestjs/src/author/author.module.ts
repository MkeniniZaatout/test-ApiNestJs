import { Module } from '@nestjs/common';
import { Author } from './author.entity';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { ArticleController } from 'src/article/article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleService } from 'src/article/article.service';
import { Article } from 'src/article/article.entity';
// import { AuthorRepository } from 'src/';

@Module({
  imports:[TypeOrmModule.forFeature([Author]), TypeOrmModule.forFeature([Article])],
  providers: [AuthorService, ArticleService],
  controllers: [AuthorController, ArticleController]
})
export class AuthorModule {}
