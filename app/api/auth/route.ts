import { register, login } from "@/services/authService";

export async function POST(req: Request) {
  const body = await req.json();

  if (body.action === "register") {
    return Response.json(await register(body.email, body.password));
  }

  return Response.json(await login(body.email, body.password));
}
