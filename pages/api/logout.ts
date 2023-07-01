// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";
type Data = {
  name: string;
};
export const config = {
  api: {
    bodyParser: false,
  },
};
export const proxy = httpProxy.createProxyServer();
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cookies = new Cookies(req, res, {
    secure: process.env.NODE_ENV !== "development",
  });
  cookies.set("auth_token");
  req.headers.cookie = "";
  res.status(200).json({ name: "logout successfully" });
}
