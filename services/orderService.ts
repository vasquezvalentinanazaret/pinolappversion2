import prisma from "../lib/prisma";

export async function createOrder(customerId: number, total: number) {
  return prisma.order.create({
    data: {
      customerId,
      total,
      status: "PENDING",
    },
  });
}

export async function getOrders() {
  return prisma.order.findMany({
    include: { payment: true },
  });
}
