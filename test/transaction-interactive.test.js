import { prisma as PrismaClient } from "../src/prisma-client";

describe("Transaction PrismaJS", () => {
  it("should be able interactive transaction", async () => {
    const [aprilia, ajengtri] = await PrismaClient.$transaction(
      async (prisma) => {
        return [
          await prisma.customer.create({
            data: {
              id: "aprilia",
              name: "aprilia",
              email: "aprilia@gmail.com",
              phone: "09",
            },
          }),
          await prisma.customer.create({
            data: {
              id: "ajengtri",
              name: "ajengtri",
              email: "ajengtri@gmail.com",
              phone: "08",
            },
          }),
        ];
      }
    );

    expect(aprilia.id).toBe("aprilia");
    expect(ajengtri.id).toBe("ajengtri");
  });
});
