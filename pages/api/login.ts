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
  return new Promise((resolve) => {
    req.headers.cookie = "";

    const interceptLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let apiResponseBody = "";
      proxyRes.on("data", (chunk: string) => {
        apiResponseBody += chunk;
      });
      proxyRes.on("end", () => {
        try {
          const { accessToken, expiredAt } = JSON.parse(apiResponseBody);
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== "development",
          });
          cookies.set("auth_token", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(expiredAt),
          });
          (res as NextApiResponse)
            .status(200)
            .json({ message: "login successful" });
        } catch (error) {
          console.log(error);
        }
        resolve(undefined);
      });
    };
    proxy.once("proxyRes", interceptLoginResponse);

    proxy.web(req, res, {
      target: process.env.API_URL,
      selfHandleResponse: true,
      changeOrigin: true,
    });
  });
}
