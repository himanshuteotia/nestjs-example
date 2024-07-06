import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/cats (GET)", () => {
    return request(app.getHttpServer())
      .get("/cats")
      .expect(200)
      .expect("This action returns all cats");
  });

  afterAll(async () => {
    await app.close();
  });
});
