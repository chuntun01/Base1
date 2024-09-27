import { createContext, useContext, useState, ReactNode } from "react";

// Định nghĩa interface cho sản phẩm trong giỏ hàng
interface ICartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

// Định nghĩa interface cho Cart Context
interface ICartContext {
  cartItems: ICartItem[];
  addToCart: (product: ICartItem) => void;
}

// Tạo context mặc định cho giỏ hàng
const CartContext = createContext<ICartContext | undefined>(undefined);

// Custom hook để sử dụng Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Tạo CartProvider để bao bọc các component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);

  const addToCart = (product: ICartItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      // Nếu sản phẩm chưa có, thêm vào giỏ hàng
      return [...prevItems, product];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
