import { Module } from '@nestjs/common';
import { Author } from './author.entity';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { ArticleController } from 'src/article/article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthorRepository } from 'src/';

@Module({
  imports:[TypeOrmModule.forFeature([Author])],
  providers: [AuthorService],
  controllers: [AuthorController, ArticleController]
})
export class AuthorModule {}
