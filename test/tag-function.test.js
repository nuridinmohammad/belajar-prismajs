import { prisma } from "../src/prisma-client";

function tagFunction(array, ...args) {
  console.log(array);
  console.log(args);
}

describe("Tag Function", () => {
  it("should be able tag function or string template", () => {
    const nama = "Mohammad Nuridin";

    tagFunction`Hello ${nama}!, how are you?`;
    tagFunction`Bye ${nama}!, see u later!`;
  });

  test("should be able sql", () => {
    const nama = "Mohammad Nuridin";
    const age = 30;

    tagFunction`SELECT * FROM users WHERE nama=${nama} AND age=${age};`;
  });
});
