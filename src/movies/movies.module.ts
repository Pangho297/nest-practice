import { Module } from "@nestjs/common";
import { MoviesController } from "./movies.controller";
import { MoviesService } from "./movies.service";

/** 모듈은 컨트롤러와 서비스를 모아두고 의존성을 주입하는 역할을 담당한다 */
@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
