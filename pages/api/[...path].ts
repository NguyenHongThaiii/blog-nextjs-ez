// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
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
  return new Promise(() => {
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get("auth_token");
    if (accessToken) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    }
    req.headers.cookie = "";

    proxy.web(req, res, {
      target: process.env.API_URL,
      selfHandleResponse: false,
      changeOrigin: true,
    });
  });
}
