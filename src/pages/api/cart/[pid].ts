import { dbConnect } from '@/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pid } = req.query;

  if (req.method === 'PUT') {
    const { quantity } = req.body; // Lấy số Slượng body request

  if (!quantity) {
    return res.status(400).json({ error: 'Thiếu số lượng' }); // Kiểm tra số lượng
  }
  
  if (!pid || Array.isArray(pid)) {
    return res.status(400).json({ error: 'ID sản phẩm không hợp lệ' });
  }

  try {
    // Cập nhật số lượng sản phẩm giỏ hàng dựa trên ID
    const result = await dbConnect.query(
      `UPDATE cart SET quantity = $1 WHERE id = $2 RETURNING *`, // cập nhật
      [quantity, pid] // Truyền số lượng và ID sản phẩm vào 
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Sản phẩm không tìm thấy' }); // Trả về lỗi 
    }

    const updatedCartItem = result.rows[0]; // Lấy sản phẩm đã cập nhật
    return res.status(200).json(updatedCartItem); // Trả về sản phẩm đã cập nhật
  } catch (error) {
    console.error("Error updating cart item:", error); // Ghi lại lỗi nếu có
    return res.status(500).json({ message: "Lỗi cập nhật sản phẩm" }); // Trả về lỗi 500 nếu có 
  }
  } else if (req.method === 'DELETE') {
    try {
      // Kiểm tra pid 
      if (!pid) {
        return res.status(400).json({ error: "Thiếu id sản phẩm" });
      }

      //  xóa sản phẩm
      const result = await dbConnect.query(`DELETE FROM cart WHERE id = $1 RETURNING *`, [pid]);

      // Kiểm tra có bản ghi nào bị xóa k
      if (result.rowCount === 0) {
        return res.status(404).json({ message: "Không tìm thấy sản phẩm để xóa" });
      }

      // Phản hồi thành công
      return res.status(200).json({ message: "Xóa sản phẩm thành công" });
      } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ message: "Lỗi xóa sản phẩm" });
    }
  }
   else if (req.method === 'GET') {
    // get theo id
    const result = await dbConnect.query(`SELECT * FROM cart where id=${pid}`);
    res.status(200).json(result.rows[0]);
  }
   else res.status(404).json({ error: 'Not found' });
}
