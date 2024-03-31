import { prisma } from "../src/prisma-client";

describe("Prisma Where Operator", () => {
  it("should can using where operator", async () => {
    const products = await prisma.product.findMany({
      where: {
        OR: [{ name: "Produk 1" }, { name: "Produk 4" }],
      },
      orderBy: {
        name: "asc",
      },
    });

    console.log(products);

    expect(products.length).toBe(2);
    expect(products[0].name).toBe("Produk 1");
    expect(products[1].name).toBe("Produk 4");
  });
});
