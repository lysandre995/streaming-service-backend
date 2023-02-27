import { MoviesTable } from '../database/tables/movies.table';
import { GenreEnum } from '../enums/genre-enum';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  constructor(private readonly moviesTable: MoviesTable) {}

  public async getMovies(genre?: GenreEnum) {
    return await this.moviesTable.getMovies(genre);
  }
}
