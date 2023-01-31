import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieController } from './movie/movie.controller';
import { TvSeriesController } from './tv-series/tv-series.controller';
import { MovieService } from './movie/movie.service';
import { TvSeriesService } from './tv-series/tv-series.service';
import { MoviesTable } from './database/tables/movies.table';
import { TvSeriesTable } from './database/tables/tv-series.table';

@Module({
  imports: [],
  controllers: [AppController, MovieController, TvSeriesController],
  providers: [
    AppService,
    MoviesTable,
    TvSeriesTable,
    MovieService,
    TvSeriesService,
  ],
})
export class AppModule {}
