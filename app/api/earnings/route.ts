import { getEarnings } from "@/services/earningsService";

export async function GET() {
  return Response.json(await getEarnings());
}
