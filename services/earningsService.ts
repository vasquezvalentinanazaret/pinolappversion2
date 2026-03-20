import prisma from "../lib/prisma";

export async function getEarnings() {
  const orders = await prisma.order.findMany({
    include: { payment: true },
  });

  const totalRevenue = orders.reduce(
    (sum, o) => sum + (o.payment?.amount || 0),
    0
  );

  return {
    totalRevenue,
    totalOrders: orders.length,
  };
}
