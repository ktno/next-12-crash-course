// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { cats } from "../../../data";

export type Data = {
  id: number;
  name: string;
  phone: string;
  email: string;
  image: {
    url: string;
    alt: string;
  };
  favoured: boolean;
  description: string;
  color: string;
  gender: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(cats);
}
