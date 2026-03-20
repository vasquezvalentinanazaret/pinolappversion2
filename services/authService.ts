import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function register(email: string, password: string) {
  const hashed = await bcrypt.hash(password, 10);

  return prisma.customer.create({
    data: { email, password: hashed, name: "User" },
  });
}

export async function login(email: string, password: string) {
  const user = await prisma.customer.findUnique({ where: { email } });

  if (!user) throw new Error("No user");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid");

  const token = jwt.sign({ id: user.id }, JWT_SECRET);

  return { token };
}
