import { prisma } from "../src/prisma-client";

describe("CRUD with PrismaJS", () => {
  test("should be able create customer", async () => {
    const customer = await prisma.customer.create({
      data: {
        id: "nuridin",
        name: "mohammad nuridin",
        email: "nuridin@gmail.com",
        phone: "08976554321",
      },
    });

    expect(customer.id).toBe("nuridin");
    expect(customer.name).toBe("mohammad nuridin");
    expect(customer.email).toBe("nuridin@gmail.com");
    expect(customer.phone).toBe("08976554321");
  });

  test("should be able update customer", async () => {
    const customer = await prisma.customer.update({
      data: {
        name: "mohammad nuridin update",
      },
      where: {
        id: "nuridin",
      },
    });

    expect(customer.id).toBe("nuridin");
    expect(customer.name).toBe("mohammad nuridin update");
    expect(customer.email).toBe("nuridin@gmail.com");
    expect(customer.phone).toBe("08976554321");
  });

  test("should be able read customer", async () => {
    const customer = await prisma.customer.findUnique({
      where: {
        id: "nuridin",
      },
    });

    expect(customer.id).toBe("nuridin");
    expect(customer.name).toBe("mohammad nuridin update");
    expect(customer.email).toBe("nuridin@gmail.com");
    expect(customer.phone).toBe("08976554321");
  });

  test("should be able delete customer", async () => {
    const customer = await prisma.customer.delete({
      where: {
        id: "nuridin",
      },
    });

    expect(customer.id).toBe("nuridin");
    expect(customer.name).toBe("mohammad nuridin update");
    expect(customer.email).toBe("nuridin@gmail.com");
    expect(customer.phone).toBe("08976554321");
  });
});
