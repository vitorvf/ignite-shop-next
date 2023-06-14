import { createContext, ReactNode, useEffect, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
  quantity?: number;
}

interface CartContextType {
  addToCart: (product: IProduct) => void;
  removeProductCart: (productId: string) => void;
  totalPrice: number;

  // removeProductCart: (productId: string) => void;
  // itemProductDuplicated: CartItem[];
  cartItems: IProduct[];
  // clearCart: () => void;

  // totalPrice: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.numberPrice;
  }, 0);

  function addToCart(product: IProduct) {
    setCartItems([...cartItems, { ...product }]);
  }

  const removeProductCart = (productId: string) => {
    setCartItems((state) =>
      state.filter((product) => product.id !== productId)
    );
  };

  // const cartQuantity = cartItems.length;

  return (
    <CartContext.Provider
      value={{ addToCart, cartItems, removeProductCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
