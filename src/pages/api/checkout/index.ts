import { dbConnect } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handlerCheckout(
  req: NextApiRequest,
  res: NextApiResponse
) {

    if (req.method === 'GET') {
        // get theo id
        const result = await dbConnect.query(
            `SELECT c.id AS cartId, p.id AS productId, c.id, c.quantity, c.productsize, p.title, p.image, p.price
            FROM cart AS c 
            JOIN product AS p ON p.id = c.productid`);
        res.status(200).json(result.rows);
      } 
       else res.status(404).json({ error: 'Not found' });
    }