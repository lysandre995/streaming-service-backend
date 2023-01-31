import { GenreEnum } from '../enums/genere-enum';
import { TvSeriesTable } from '../database/tables/tv-series.table';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TvSeriesService {
  constructor(private readonly tvSeriesTable: TvSeriesTable) {}

  public async getTvSeries(genre: GenreEnum) {
    return await this.tvSeriesTable.getTvSeries(genre);
  }
}
