/** 데이터베이스 스키마를 정의하는 엔티티 클래스
 *
 * Prisma를 사용할 경우 데이터베이스 스키마를 정의하는 엔티티 클래스를 작성하지 않아도 된다
 */

export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}
