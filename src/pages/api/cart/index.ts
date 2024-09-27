import type { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@/db';


export interface Root {
  cartItems: CartItem[]
}

export interface CartItem {
  id: number
  productid: number
  quantity: number
  createdat: string
  productsize: string
}


export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { productId, quantity, productSize } = req.body;

      if (!productId || !quantity || !productSize) {
        return res.status(400).json({ error: 'Thiếu id sản phẩm, số lượng hoặc size' });
      }

      const result = await dbConnect.query(
        `INSERT INTO cart (productId, quantity, createdAt, productSize) VALUES ($1, $2, NOW(),$3) RETURNING *`, 

        [productId, quantity, productSize]
      );

      const newCartItem: CartItem = result.rows[0];

      return res.status(201).json(newCartItem);
    }catch (error) {
      console.error("Error add products:", error);
      res.status(500).json({ message: "Lỗi  thêm sản phẩm" });
    }
  } else if (req.method === "GET") {
    // get theo id
    const  page = req.query.page;

    console.log("PAGE ",page);

    const result = await dbConnect.query<{ count: Number }>(
      "SELECT * FROM cart"
    );
    const cartItems = result.rows;

    res.status(200).json({ cartItems });
  } else {
    return res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
  }
}
