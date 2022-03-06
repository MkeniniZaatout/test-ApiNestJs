import { Module } from '@nestjs/common';
import { Author } from '../author/author.entity';
import { ArticleService } from './article.service';
import { AuthorController } from '../author/author.controller';
import { ArticleController } from './article.controller';

@Module({
  providers: [ArticleService],
  controllers: [AuthorController, ArticleController]
})
export class ArticleModule {}
