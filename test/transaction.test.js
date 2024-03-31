import { prisma } from "../src/prisma-client";

describe("Transaction PrismaJS", () => {
  it("should be able sequential transaction", async () => {
    const [hilda, khansa] = await prisma.$transaction([
      prisma.customer.create({
        data: {
          id: "hilda",
          name: "hilda",
          email: "hilda@gmail.com",
          phone: "0897654321",
        },
      }),
      prisma.customer.create({
        data: {
          id: "khansa",
          name: "khansa",
          email: "khansa@gmail.com",
          phone: "08978675645",
        },
      }),
    ]);

    expect(hilda.id).toBe("hilda");
    expect(khansa.id).toBe("khansa");
  });
});
