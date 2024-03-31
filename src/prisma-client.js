import { PrismaClient } from "prisma/prisma-client";

export const prisma = new PrismaClient({
  errorFormat: "pretty",
  log: ["query", "error", "info", "warn"],
});
