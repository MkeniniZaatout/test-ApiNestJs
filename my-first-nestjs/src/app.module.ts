import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { ArticleModule } from './article/article.module';
import { ArticleService } from './article/article.service';
import { Article } from './article/article.entity';
import { AnnuaireModule } from './annuaire/annuaire.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      username: '',
      password: '',
      database: 'test_idruide',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Article]),
    AuthorModule,
    ArticleModule,
    AnnuaireModule,
  ],
  controllers: [AppController],
  providers: [AppService,ArticleService],
})
export class AppModule {}