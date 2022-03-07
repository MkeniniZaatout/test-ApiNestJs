import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Article } from '../article/article.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({})
export class Author {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    username: string;

    @Column({
        nullable: true,
    })
    avatarURL: string;

    @ApiProperty({ type: () => Article })
    @OneToMany(() => Article, article => article.author)
    articles: Article[];


}