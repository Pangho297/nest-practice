<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Node.js 위에서 움직이는 Express를 기반으로 만들어진  프레임워크로 Angular에서 영감을 받아 Typescript로 작성되었다. 효율적이고 확장 가능한 서버 애플리케이션을 구축하는데 도움을 주는 여러가지 특징을 가지고 있다

- Typescript 지원
    - 기본적으로 Typescript를 사용하여 개발
    - 타입 안정성과 더 나은 개발자 경험 제공
- 모듈화 아키텍처
    - 모듈 단위로 애플리케이션을 구성
    - 각 모듈은 관련된 컨트롤러, 서비스, 모델 등을 포함
    - 코드의 재사용성과 유지보수성 향상
- 의존성 주입(Dependency Injection)
    - IoC(Inversion of Contorol) 컨테이너 제공
    - 컴포넌트 간의 결합도를 낮추고 테스트 용이성 증가
- 데코레이터 패턴
    - `@Controller()`, `@Injectable()`등의 데코레이터 사용
    - 메타데이터 기반의 선언적 프로그래밍 지원
- 미들웨어 지원
    - Express/Fastify 미들웨어 통합 가능
    - 커스텀 미들웨어 작성 용이
- WebSocket 지원
    - 실시간 애플리케이션 개발을 위한 WebSocket 지원
    - `@WebSocketGateway()` 데코레이터를 통한 간편한 구현
- OpenAPI (Swagger) 통합
    - API 문서 자동 생성
    - 테스트 인터페이스 제공
- 데이터베이스 통합
    - TypeORM, Sequelize 등 다양한 ORM 지원
    - 데이터베이스 작업의 추상화 제공

Nest.js는 엔터프라이즈급 애플리케이션 개발에 특히 적합하며, 확장 가능하고 유지보수가 용이한 백엔드 서비스를 구축하는데 효과적이다

## 시작하기

Nest.js 프레임워크 CLI 명령어를 통해 미리 세팅된 여러가지 기능을 제공한다
우선 Nest.js에서 제공하는 CLI부터 다운로드 받자

```bash
npm i -g @nestjs/cli
```

설치 시 가급적이면 npm을 이용하는것이 좋다 yarn으로 설치 시 에러가 발생할 수 있다

이를 통해 Nest.js 프로젝트를 설치할 수 있다

```bash
nest new PROJECT_NAME
```

추가로 nest만 입력 시 사용 가능한 커멘드 목록을 볼 수 있다

```bash
Usage: nest <command> [options]

Options:
  -v, --version                                   Output the current version.
  -h, --help                                      Output usage information.

Commands:
  new|n [options] [name]                          Generate Nest application.
  build [options] [app]                           Build Nest application.
  start [options] [app]                           Run Nest application.
  info|i                                          Display Nest project details.
  add [options] <library>                         Adds support for an external library to your project.
  generate|g [options] <schematic> [name] [path]  Generate a Nest element.
    Schematics available on @nestjs/schematics collection:
      ┌───────────────┬─────────────┬──────────────────────────────────────────────┐
      │ name          │ alias       │ description                                  │
      │ application   │ application │ Generate a new application workspace         │
      │ class         │ cl          │ Generate a new class                         │
      │ configuration │ config      │ Generate a CLI configuration file            │
      │ controller    │ co          │ Generate a controller declaration            │
      │ decorator     │ d           │ Generate a custom decorator                  │
      │ filter        │ f           │ Generate a filter declaration                │
      │ gateway       │ ga          │ Generate a gateway declaration               │
      │ guard         │ gu          │ Generate a guard declaration                 │
      │ interceptor   │ itc         │ Generate an interceptor declaration          │
      │ interface     │ itf         │ Generate an interface                        │
      │ library       │ lib         │ Generate a new library within a monorepo     │
      │ middleware    │ mi          │ Generate a middleware declaration            │
      │ module        │ mo          │ Generate a module declaration                │
      │ pipe          │ pi          │ Generate a pipe declaration                  │
      │ provider      │ pr          │ Generate a provider declaration              │
      │ resolver      │ r           │ Generate a GraphQL resolver declaration      │
      │ resource      │ res         │ Generate a new CRUD resource                 │
      │ service       │ s           │ Generate a service declaration               │
      │ sub-app       │ app         │ Generate a new application within a monorepo │
      └───────────────┴─────────────┴──────────────────────────────────────────────┘
```

프로젝트 생성 시 Nest.js는 몇가지 질문을 한다

```bash
? What name would you like to use for the new project?
# 프로젝트 이름에 대해 질문한다 만약 현재 경로에 생성하려면 . 을 입력하면 된다
# 프로젝트 이름을 입력했다면 생략한다

? Which package manager would you ❤️  to use?
# 프로젝트에서 사용할 패키지 메니저를 선택할 수 있다
# npm, yarn, pnpm 중 선택할 수 있다
```

질문에 답을 했다면 프로젝트가 생성되기 시작한다

```bash
CREATE .eslintrc.js (688 bytes)
CREATE .prettierrc (54 bytes)
CREATE nest-cli.json (179 bytes)
CREATE package.json (2018 bytes)
CREATE README.md (5304 bytes)
CREATE tsconfig.build.json (101 bytes)
CREATE tsconfig.json (567 bytes)
CREATE src/app.controller.ts (286 bytes)
CREATE src/app.module.ts (259 bytes)
CREATE src/app.service.ts (150 bytes)
CREATE src/main.ts (236 bytes)
CREATE test/jest-e2e.json (192 bytes)
CREATE src/app.controller.spec.ts (639 bytes)
CREATE test/app.e2e-spec.ts (654 bytes)

✔ Installation in progress... ☕

🚀  Successfully created a new project
👉  Get started with the following commands:

$ cd .
$ npm run start

                          Thanks for installing Nest 🙏
                 Please consider donating to our open collective
                        to help us maintain this package.

               🍷  Donate: https://opencollective.com/nest
```

프로젝트 생성이 완료되면 위와 같은 메세지가 뜬다

### Trouble Shotting

![image](https://github.com/user-attachments/assets/79553e96-a6dd-4b8e-9174-b1c7eda0d9e6)

Windows 사용 중 다음과 같은 Prettier 에러가 발생한다면…

.eslintrc.js 파일의 rules에 다음과 같이 추가한다

```tsx
rules: {
	"prettier/prettier": [
    "error",
    {
      endOfLine: "auto"
    }
	]
}
```

이렇게 작성한 뒤 VScode를 재시작하면 에러들이 사라져 있을 것이다

> *왜 이런 에러가 발생할까?  
Windows는 줄 바꿈 시 `CR`, Carriage-Return(캐리지 리턴) 문자와 `LF`, Linefeed (줄 바꿈) 문자를 동시에 사용한다 Mac과 리눅스는 오직 LF 문자만 사용한다 (구버전 Mac도 CR문자를 사용한다)
따라서 텍스트 파일을 다른 시스템에서 생성하여 사용할 경우 호환성 문제가 발생할 수 있다
때문에 ESLint에서 CR 문자를 제거하라는 에러가 발생하는 것이다*
> 

## Architecture

프로젝트를 생성하고나면 src 폴더에 다음과 같은 파일들이 생성되어있을것이다

![image](https://github.com/user-attachments/assets/08937e86-7b33-4d2d-8a4c-e770843b711a)

이 중 `app.controller.spec.ts`파일을 제외한 나머지 파일들만 설명하겠다

> spec.ts 파일은 단위 테스트를 위한 테스트 파일이다 코드의 정확성을 검증하고, 리팩토링이나 새로운 기능 추가 시 기존 기능이 올바르게 동작하는지 확인하는데 사용된다
> 

### `main.ts`

```tsx
// NestJS 핵심 기능들을 임포트
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// 애플리케이션 부트스트랩 함수
async function bootstrap() {
  // NestJS 애플리케이션 인스턴스 생성
  const app = await NestFactory.create(AppModule);
  // 서버 시작 (환경변수 PORT 또는 기본값 3000 사용)
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

Nest.js 애플리케이션의 진입점(entry point) 역활을 하는 파일이다 서버를 구동하고 필요한 초기 설정을 담당한다

- Nest.js 애플리케이션을 초기화하고 시작하는 역활
- AppModoule을 루트 모듈로 사용하여 애플리케이션 생성
- 지정된 포트(환경변수 PORT 또는 3000)에서 HTTP 서버 실행
- `bootstrap()`함수는 비동기 함수로 선언되어있어 애플리케이션 시작 과정에서 발생할 수 있는 비동기 작업을 처리

### `app.module.ts`

```tsx
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],                   // 다른 모듈들을 가져올 때 사용
  controllers: [AppController],  // API 엔드포인트 처리를 담당하는 컨트롤러
  providers: [AppService],       // 비즈니스 로직을 담당하는 서비스 또는 의존성들을 등록
})
export class AppModule {}
```

Nest.js 애플리케이션의 루트 모듈을 정의하는 핵심 파일로 `main.ts` 에서 애플리케이션을 부트스트랩할 때 사용되는 루트 모듈이다. Nest.js의 모듈화된 구조의 시작점이라고 볼 수 있다

- 전체 애플리케이션의 구조를 모듈 단위로 구성
- 다른 모듈, 컨트롤러, 서비스들을 하나로 묶어주는 역활

### `app.controller.ts`

```tsx
import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller() // Nest.js의 컨트롤러임을 명시
export class AppController {
  constructor(private readonly appService: AppService) {} // 의존성 주입

  @Get() // 라우팅
  getHello(): string {
    return this.appService.getHello();
  }
}
```

Nest.js 애플리케이션의 컨트롤러를 정의하는 파일로 HTTP요청을 받아서 적절한 서비스 메서드를 호출하고, 그 결과를 클라이언트에게 반환하는 중간 계층 역활을 한다

- 클라이언트로부터 들어오는 HTTP 요청을 처리
- `@Get()` 데코레이터는 GET 요청을 처리하는 라우트 핸들러
- `constructor`를 통해 `AppService`를 주입받아 사용
- 비즈니스 로직은 서비스에 위임하고, 컨트롤러는 요청/응답 처리에만 집중
- 라우팅 처리도 담당함
- 루트 경로 (’/’)에 대한 GET 요청이 들어오면 `getHello()` 메서드가 실행
- `appService.getHello()`를 호출하여 결과를 클라이언트에게 반환
- `@Controller()` 데코레이터의 역활
    
    `@Controller()` 데코레이터는 Nest.js에서 중요한 역활을 하는 클래스 데코레이터다 이는 Nest.js의 선언적 프로그래밍 방식을 대표하는 요소 중 하나이며 REST API 엔드포인트를 구성하는 기본 구성 요소이다
    
    - 데코레이터가 달린 클래스를 Nest.js의 컨트롤러임을 명시, 이는 Nest.js프레임워크만의 독특한 사용방법
    - Nest.js의 의존성 주입 시스템에 이 클래스를 컨트롤러로 등록함으로써 Nest.js 프레임워크가 필요한 의존성(여기선 `AppService`)을 주입하고 인스턴스를 생성하며 라우팅 설정을 함
    
    ```tsx
    // 기본 사용 (루트 경로 '/')
    @Controller()
    export class AppController {}
    
    // 특정 경로 prefix 설정
    @Controller('users')  // '/users' 경로로 시작하는 모든 라우트를 처리
    export class UsersController {}
    
    // 버전 관리
    @Controller('api/v1/users')  // '/api/v1/users' 경로로 시작
    export class UsersV1Controller {}
    ```
    
    - 라우트 경로 설정예시
    - 관련된 라우트 핸들러들을 하나의 클래스로 그룹화
    - 공통된 경로 prefix를 설정하여 관련 엔드포인트들을 논리적으로 구성
    - Nest.js 프레임워크에 이 클래스가 어떻게 처리되어야 하는지에 대한 정보 (메타데이터) 제공
    - 미들웨어, 가드, 인터셉터 등의 적용 대상임을 명시

### `app.service.ts`

Nest.js 애플리케이션의 비즈니스 로직을 담당하는 서비스 클래스이다

```tsx
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
```

- 실제 작업을 수행하는 메서드들을 포함
- 컨트롤러는 이 서비스를 호출하여 필요한 작업 수행
- @Injectable() 데코레이터를 사용하여 Nest.js의 의존성 주입 시스템에 서비스로 사용할 수 있음을 표시
- 다른 클래스에 주입될 수 있음
- 컨트롤러와 비즈니스 로직을 분리
- 단일 책임 원칙(SRP) 준수
- 코드 재사용성과 테스트 용이성 향상

예제는 Hello World! 문자열을 반환하는 예제이지만 실제 애플리케이션에서 역활은 다음과 같다

- 데이터베이스 작업
- 외부 API 호출
- 복잡한 비즈니스 로직 처리
- `@Injectable()` 데코레이터의 역활
    
    클래스를 Nest.js의 의존성 주입 시스템에 등록하여 다른 컴포넌트에서 해당 클래스를 주입받아 사용할 수 있게하는 Nest.js의 의존성 주입 시스템에서 핵심적인 역활을 하는 데코레이터다
    
    - Nest.js의 IoC(Inversion of Control) 컨테이너에 등록
    - 다른 클래스에서 주입받아 사용할 수 있게 함
    
    ```tsx
    // app.controller.ts
    
    @Controller()
    export class AppController {
      // 여기서 의존성 주입이 일어납니다
      constructor(private readonly appService: AppService) {}
    
      @Get()
      getHello(): string {
        // 주입받은 서비스를 사용
        return this.appService.getHello();
      }
    }
    ```
    
    Nest.js가 `Controller`를 생성할 때 `Service`의 인스턴스가 필요하다는 것을 확인 후 `Service`의 인스턴스를 생성하여 생성자를 통해 인스턴스를 주입하는 과정이다
    
    이를 전통적인 방식으로 변환하면 아래와 같다
    
    ```tsx
    // app.controller.ts
    
    // 전통적인 방식 (의존성 주입 없이)
    class AppController {
      private appService: AppService;
    
      constructor() {
        // 직접 인스턴스 생성 - 강한 결합
        this.appService = new AppService();
      }
    }
    
    // 의존성 주입 방식
    class AppController {
      constructor(private readonly appService: AppService) {
        // NestJS가 자동으로 주입 - 느슨한 결합
      }
    }
    ```
    
    - 인스턴스의 생성과 소멸을 프레임워크가 관리

서비스는 `@Injectable` 데코레이터를 통해 의존성에 주입되어 사용할 수 있음을 선언하기도 하지만 반대로 서비스에서도 의존성을 주입받아 사용할 수 있다 

```tsx
// example
// user.service.ts

@Injectable()
export class UsersService {
  constructor(
    // 데이터베이스 서비스 주입
    private readonly databaseService: DatabaseService,
    // 이메일 서비스 주입
    private readonly emailService: EmailService,
    // 캐시 서비스 주입
    private readonly cacheService: CacheService
  ) {}

  async createUser(userData: CreateUserDto) {
    // 데이터베이스 서비스 사용
    const user = await this.databaseService.save(userData);
    
    // 이메일 서비스 사용
    await this.emailService.sendWelcomeEmail(user.email);
    
    // 캐시 서비스 사용
    await this.cacheService.set(`user:${user.id}`, user);
    
    return user;
  }
}

// app.module.ts
// 모든 의존성은 모듈에 등록되어야 한다
@Module({
  imports: [TypeOrmModule.forRoot(), EmailModule],
  providers: [
    UsersService,
    DatabaseService,
    EmailService,
    CacheService
  ]
})
export class AppModule {}
```

### Conclusion

Nest.js는 처음에는 구조와 데코레이터, 의존성 주입 같은 개념들이 복잡해 보일 수 있지만, 이해하고나면 매우 체계적이고 강력한 프레임워크이다 특히 모듈화된 구조, 의존성 주입 시스템, 데코레이터를 통한 선언적 프로그래밍, Typescript의 장점 활용은 큰 규모의 애플리케이션을 개발할 때 매우 유용하다

## Lifecycle of Nest.js

애플리케이션이 시작되고 종료될 때까지 거치는 여러 단계에 대해서 알아보자
주요 생명주기 이벤트와 순서는 다음과 같다

### 애플리케이션 초기화 단계

```tsx
// 생명주기 인터페이스 구현 예시
export class AppController implements OnModuleInit, OnApplicationBootstrap {
  // 모듈 초기화 시
  async onModuleInit() {
    console.log('모듈이 초기화되었습니다');
  }

  // 애플리케이션 부트스트랩 시
  async onApplicationBootstrap() {
    console.log('애플리케이션이 완전히 시작되었습니다');
  }
}
```

1. `middleware` 등록
2. `OnModuleInit()` 호출
3. `OnApplicationBootstrap()`  호출

### 애플리케이션 종료 단계

```tsx
export class AppController implements OnModuleDestroy, OnApplicationShutdown {
  // 모듈 제거 시
  async onModuleDestroy() {
    console.log('모듈이 제거됩니다');
  }

  // 애플리케이션 종료 시
  async onApplicationShutdown(signal?: string) {
    console.log('애플리케이션이 종료됩니다', signal);
  }
}
```

1. `OnModuleDestroy()` 호출
2. `beforeApplicationShutdown()` 호출 (signal 수신)
3. `onApplicationShutdown()` 호출

### 전체 생명주기 순서

1. `middleware` 등록
2. `OnModuleInit()`
3. `OnApplicationBootstrap()`
4. 애플리케이션 실행
5. `OnModuleDestroy()`
6. `beforeApplicationShutdown()` 
7. `OnApplicationShutdown()` 

생명주기 메서드의 주요 용도는 다음과 같다

- 초기화 작업
    - 데이터베이스 연결
    - 캐시 초기화
    - 외부 서비스 연결 설정
- 정리 작업
    - 데이터 베이스 연결 종료
    - 리소스 해제
    - 실행 중인 작업 정상 종료

### 사용 예시

```tsx
@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private connection: any;

  async onModuleInit() {
    // 데이터베이스 연결 초기화
    this.connection = await createConnection({
      // 연결 설정
    });
  }

  async onModuleDestroy() {
    // 데이터베이스 연결 종료
    await this.connection.close();
  }
}
```

Nest.js의 생명주기는 보통은 서버가 시작/종료될 때 한 번만 실행된다 다만 이런 경우에는 생명주기 메서드들이 자주 실행될 수 있다

- 동적 모듈 로딩
- 마이크로서비스 아키텍처에서의 모듈 재시작
- 핫 리로딩 시

이 외에는 주로 다음과 같은 상황에서 실행된다

- 데이터베이스 연결
- 캐시 초기화
- 외부 서비스 연결
- 리소스 정리

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
