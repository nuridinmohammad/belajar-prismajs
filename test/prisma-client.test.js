import { prisma } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to connet database", async () => {
    await prisma.$connect();

    // do something

    await prisma.$disconnect();
  });
});
