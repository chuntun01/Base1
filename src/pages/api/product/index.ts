import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/db"

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse)
   {
  try {
    // Kết nối db và truy vấn
    const result = await dbConnect.query<{ count: number }>(
      "SELECT id, title, image, price, image1, image2, content, oldprice FROM product"
    );
    // Lấy danh sách sản phẩm 
    const sanPhams = result.rows;
    const soTrang = 3; // tính toán số trang

    res.status(200).json({ sanPhams, soTrang });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
}
