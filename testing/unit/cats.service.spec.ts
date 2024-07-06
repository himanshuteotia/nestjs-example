import { Test, TestingModule } from "@nestjs/testing";
import { CatsService } from "./cats.service";

// @Injectable()
// export class CatsService {
//   getCats(): string {
//     return 'This action returns all cats';
//   }
// }
describe("CatsService", () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it('should return "This action returns all cats"', () => {
    expect(service.getCats()).toBe("This action returns all cats");
  });
});
