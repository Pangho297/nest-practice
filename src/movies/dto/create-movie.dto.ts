import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto {
  @IsString()
  readonly title: string; // 데이터의 불변성을 보장하고자 할 때에는 readonly를 사용한다

  @IsNumber()
  readonly year: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly genres: string[];
}
