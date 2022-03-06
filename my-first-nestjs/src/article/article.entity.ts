import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Author } from '../author/author.entity';

@Entity({})
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    content: string;

    @Column({
        type:'datetime',
        nullable: true,
    })
    publishedDate: string;

    @Column({
        default:0
    })
    likes: number;

    @ManyToOne(() => Author, author => author.articles)
    author: Author;

}