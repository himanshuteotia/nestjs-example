import { Test, TestingModule } from "@nestjs/testing";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

// import { Controller, Get } from "@nestjs/common";
// import { CatsService } from "./cats.service";

// @Controller("cats")
// export class CatsController {
//   constructor(private readonly catsService: CatsService) {}

//   @Get()
//   getCats(): string {
//     return this.catsService.getCats();
//   }
// }

describe("CatsController", () => {
  let controller: CatsController;
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it('should return "This action returns all cats"', () => {
    jest
      .spyOn(service, "getCats")
      .mockImplementation(() => "This action returns all cats");
    expect(controller.getCats()).toBe("This action returns all cats");
  });
});
