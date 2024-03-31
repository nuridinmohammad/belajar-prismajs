import { prisma } from "../src/prisma-client";

describe("Prisma Crud Many", () => {
  it("should be able create many", async () => {
    const { count } = await prisma.customer.createMany({
      data: [
        {
          id: "aprilia",
          name: "aprilia",
          email: "aprilia@gmail.com",
          phone: "09",
        },
        {
          id: "ajengtri",
          name: "ajengtri",
          email: "ajengtri@gmail.com",
          phone: "08",
        },
        {
          id: "hilda",
          name: "hilda",
          email: "hilda@gmail.com",
          phone: "0897654321",
        },
        {
          id: "khansa",
          name: "khansa",
          email: "khansa@gmail.com",
          phone: "08978675645",
        },
      ],
    });

    expect(count).toBe(4);
  });

  test("should be able create products", async () => {
    const { count } = await prisma.product.createMany({
      data: [
        {
          id: "P0001",
          name: "Produk 1",
          price: 1000,
          stock: 100,
          category: "K1",
        },
        {
          id: "P0002",
          name: "Produk 2",
          price: 2000,
          stock: 200,
          category: "K1",
        },
        {
          id: "P0003",
          name: "Produk 3",
          price: 3000,
          stock: 300,
          category: "K1",
        },
        {
          id: "P0004",
          name: "Produk 4",
          price: 4000,
          stock: 400,
          category: "K2",
        },
        {
          id: "P0005",
          name: "Produk 5",
          price: 5000,
          stock: 500,
          category: "K2",
        },
      ],
    });

    expect(count).toBe(5);
  });
});
