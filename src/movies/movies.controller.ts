import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { MoviesService } from "./movies.service";
import { Movie } from "./entities/movie.entity";

/** 컨트롤러는 URL을 라우팅하고 비즈니스 로직 처리 결과를 클라이언트에 전달하는 역활을 담당한다 */
@Controller("movies")
export class MoviesController {
  // 컨트롤러에서 서비스를 주입받아 사용한다
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    // 서비스에서 정의한 메서드를 호출하여 비즈니스 로직을 처리한다
    return this.moviesService.getAll();
  }

  // 파라미터값을 받는 라우트보다 밑에 있을 경우 지정한 라우트를 찾지 못한다
  @Get("search")
  search(@Query("year") year: string) {
    // 쿼리 스트링을 사용하여 쿼리 파라미터를 가져올 때에는 @Query를 사용한다
    return `We are searching for a movie made after: ${year}`;
  }

  @Get(":id")
  getOne(@Param("id") movieId: string) {
    // 라우트 경로에서 :파라미터명 으로 정의된 동적 값을 가져올 때에는 @Param을 사용한다
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    // 라우트 경로에서 전달된 데이터를 가져올 때에는 @Body()를 사용한다
    // 필요한 데이터는 반드시 직접 요청해야 한다
    // 반환이 자동으로 JSON으로 변환된다
    return this.moviesService.create(movieData);
  }

  @Delete(":id")
  remove(@Param("id") movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(":id")
  patch(@Param("id") movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
