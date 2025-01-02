import { Injectable, NotFoundException } from "@nestjs/common";
import { Movie } from "./entities/movie.entity";

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find(movie => movie.id === +id);

    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} not found`);
    }

    return movie;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== +id);
  }

  create(movieData: Movie) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
    return this.movies.at(-1);
  }

  update(id: string, updateData: Movie) {
    const movie = this.getOne(id);
    this.deleteOne(id); // 실제 DB가 아니기 때문에 삭제 후 다시 생성해야 한다
    this.movies.push({ ...movie, ...updateData });
  }
}
