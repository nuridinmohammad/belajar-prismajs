import { prisma } from "../src/prisma-client";

describe("Prisma Function Aggregate", () => {
  test("should be able aggregate", async () => {
    const products = await prisma.product.aggregate({
      _avg: {
        price: true,
      },
      _max: {
        price: true,
      },
      _min: {
        price: true,
      },
    });

    expect(products._avg.price).toBe(3000);
    expect(products._max.price).toBe(5000);
    expect(products._min.price).toBe(1000);
  });

  test("should be able groupBy having", async () => {
    const products = await prisma.product.groupBy({
      having: {
        price: {
          _avg: {
            gte: 3000,
          },
        },
      },
      by: ["category"],
      _avg: {
        price: true,
      },
      _max: {
        price: true,
      },
      _min: {
        price: true,
      },
    });

    console.log(products);

    for (const product of products) {
      console.log(
        `category: ${product.category} min: ${product._min.price} max: ${product._max.price} avg: ${product._avg.price}`
      );
    }
  });
});
