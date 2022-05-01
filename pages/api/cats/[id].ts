// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { cats } from "../../../data";

type Data = {
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
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  const cat = cats.find((cat) => cat.id === Number(id));
  if (!cat) return res.status(404);
  res.status(200).json(cat);
}
