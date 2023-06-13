import { createContext, ReactNode, useEffect, useState } from "react";

export interface CartItem extends Coffee {
  quantity: number;
  cartItems: boolean;
}

interface CartContextType {}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState(false);

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
