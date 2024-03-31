import { prisma } from "../src/prisma-client";

describe("Prisam Client", () => {
  test("should be able execute raw sql insert", async () => {
    const id = "2";
    const name = "Mohammad Nuridin";
    const impacted =
      await prisma.$executeRaw`INSERT INTO sample(id, name) VALUES(${id}, ${name});`;
    expect(impacted).toBe(1);
  });
});
