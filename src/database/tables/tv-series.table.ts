import * as sqlite3 from 'sqlite3';
import * as sqlite from 'sqlite';
import { Injectable } from '@nestjs/common';
import { GenreEnum } from '../../enums/genere-enum';

@Injectable()
export class TvSeriesTable {
  private databaseName;
  private databasePool;

  public async getTvSeries(genre: GenreEnum) {
    this.databaseName = process.env.DATABASE_NAME;
    this.databasePool = await sqlite.open({
      filename: 'streaming_service.db',
      driver: sqlite3.Database,
    });
    const query = genre
      ? `SELECT * FROM tv_series WHERE genre = '${genre}';`
      : 'SELECT * FROM tv_series;';
    try {
      return await this.databasePool.all(query);
    } catch (err) {
      throw err;
    }
  }
}
