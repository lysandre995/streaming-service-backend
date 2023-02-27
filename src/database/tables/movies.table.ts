import { GenreEnum } from 'src/enums/genre-enum';
import * as sqlite3 from 'sqlite3';
import * as sqlite from 'sqlite';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesTable {
  private databaseName;
  private databasePool;

  public async getMovies(genre?: GenreEnum) {
    this.databaseName = process.env.DATABASE_NAME;
    this.databasePool = await sqlite.open({
      filename: 'streaming_service.db',
      driver: sqlite3.Database,
    });
    const query = genre
      ? `SELECT * FROM movies WHERE genre = '${genre}';`
      : 'SELECT * FROM movies;';
    try {
      return await this.databasePool.all(query);
    } catch (err) {
      throw err;
    }
  }
}
