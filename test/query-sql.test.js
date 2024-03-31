import { prisma } from "../src/prisma-client";

describe("Prisam Client", () => {
  test("should be able query raw sql", async () => {
    const samples =
      await prisma.$queryRaw`SELECT * FROM sample WHERE id = "2";`;
    for (const sample of samples) {
      console.log(`${sample.id}, ${sample.name}`);
    }
  });
});
