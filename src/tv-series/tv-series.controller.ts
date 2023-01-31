import { Controller, Get, Request } from '@nestjs/common';
import { TvSeriesService } from './tv-series.service';

@Controller('tv-series')
export class TvSeriesController {
  constructor(private readonly tvSeriesService: TvSeriesService) {}

  @Get()
  public async getTvSeries(@Request() req: any) {
    return await this.tvSeriesService.getTvSeries(req.query['genre']);
  }
}
