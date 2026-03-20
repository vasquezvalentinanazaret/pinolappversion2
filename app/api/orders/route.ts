import { createOrder, getOrders } from "@/services/orderService";

export async function GET() {
  return Response.json(await getOrders());
}

export async function POST(req: Request) {
  const body = await req.json();
  return Response.json(await createOrder(body.customerId, body.total));
}
