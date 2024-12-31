import { Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";

/** 컨트롤러는 URL을 라우팅하고 비즈니스 로직 처리 결과를 클라이언트에 전달하는 역활을 담당한다 */
@Controller("movies")
export class MoviesController {
  @Get()
  getAll() {
    return "This will return all movies";
  }

  @Get(":id")
  getOne(@Param("id") movieId: string) {
    // 라우트 경로에서 :파라미터명 으로 정의된 동적 값을 가져올 때에는 @Param을 사용한다
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return "This will create a movie";
  }

  @Delete(":id")
  remove(@Param("id") movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch(":id")
  patch(@Param("id") movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
