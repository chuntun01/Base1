import { dbConnect } from '@/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { pid } = req.query;

  if (req.method === 'PUT') {
    // Sửa dữ liệu
    const data = req.body;
    console.log(pid, data);
    // insert dữ liệu
    res.status(201).json(data);
  } else if (req.method === 'DELETE') {
    // Xóa dữ liệu
  } else if (req.method === 'GET') {
    // get theo id
    const result = await dbConnect.query(`SELECT * FROM product where id=${pid}`);
    res.status(200).json(result.rows[0]);
  } else res.status(404).json({ error: 'Not found' });
}
