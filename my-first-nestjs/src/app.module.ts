import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnnuaireModule } from './annuaire/annuaire.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: '',
      password: '',
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AnnuaireModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}