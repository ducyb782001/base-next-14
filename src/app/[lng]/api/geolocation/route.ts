import { geolocation, ipAddress } from "@vercel/functions";

export async function GET(request: Request) {
  const geo = geolocation(request);
  const ip = ipAddress(request);
  console.log("🚀 ~ GET ~ geo:", geo);
  console.log("🚀 ~ GET ~ ip:", ip);
  return Response.json({ geo, ip });
}
