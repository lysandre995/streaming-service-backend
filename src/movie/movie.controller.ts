import { Controller, Get, Request } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  public async getMovies(@Request() req: any) {
    return await this.movieService.getMovies(req.query['genre']);
  }
}
