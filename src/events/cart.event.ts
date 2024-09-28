import { ICartItem } from "@/pages/api/cart";
import axios from "axios";

export interface IAddCartData {
  productId: number;
  quantity: number;
  productSize: string;
}

export const addSanPhamToCart = async (data: IAddCartData) => {
  try {
    const res = await axios.post<ICartItem>("/api/cart", data);
    console.log('ok')
  } catch (e) {
    console.error(e);
  }
};

export const editSanPhamToCart = async (cartid: number, quantity: number) => {
  
    const res = await axios.put("/api/cart/" + cartid, { quantity });
    if  (res.status === 200) {
    console.log('ok')
  }
  else 
    console.error("lỗi");
  }


export const deleteSanPhamToCart = async (cartid: number ) => {
  try {
    const response = await axios.delete("/api/cart/" + cartid);
    if (response.status === 200) {
        console.log('đã xóa');
      } else {
        console.error('Xóa không thành công', response.data);
      }
  } catch (e) {
    console.error(e);
  }
};
