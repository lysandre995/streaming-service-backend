import { Test, TestingModule } from '@nestjs/testing';
import { TvSeriesController } from './tv-series.controller';

describe('TvSeriesController', () => {
  let controller: TvSeriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TvSeriesController],
    }).compile();

    controller = module.get<TvSeriesController>(TvSeriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
