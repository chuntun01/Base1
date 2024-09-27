import { dbConnect } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    // insert dữ liệu
    res.status(201).json(data);
  } else if (req.method === "GET") {
    // get theo id
    const  page = req.query.page;

    console.log("PAGE ",page);

    const result = await dbConnect.query<{ count: Number }>(
      "SELECT id, title,image,price, image1, image2, content, oldprice FROM product"
    );
    const sanPhams = result.rows;
    const soTrang = 3;

    res.status(200).json({ sanPhams, soTrang });
  } else res.status(404).json({ error: "Not found" });
}
