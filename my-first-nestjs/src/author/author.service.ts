import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../author/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>
    ){}

    create(author: Author) : Promise<Author> {
        return this.authorRepository.save(author);
    }

    findAll(): Promise<Author[]> {
        return this.authorRepository.find();
    }

    findById(id: number): Promise<Author> {
        return this.authorRepository.findOne(id);
    }
}
