import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { X } from "phosphor-react";
import { useContext, useState } from "react";
import { formatCurrency } from "../../utils/formateCurrency";
import { CardCart } from "../CardCart";
import {
  ButtonClose,
  ButtonFinishCart,
  CartContainer,
  CartContent,
  CartContentInfo,
  CartPriceContent,
  CartQuantityContent,
} from "./styles";
import { useShoppingCart } from "use-shopping-cart";

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

export function Cart() {
  const {
    addItem,
    removeItem,
    cartCount,
    formattedTotalPrice,
    totalPrice,
    cartDetails,

    clearCart,
  } = useShoppingCart();

  const handleRemoveFromCart = (productId) => {
    removeItem(productId);
  };

  const products = Object.keys(cartDetails).map((item) => cartDetails[item]);

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleTest() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post("/api/checkout", {
        products: products,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert("Falha ao redirecionar ao checkout!");
    }
  }
  return (
    <Dialog.Portal>
      <CartContainer>
        <ButtonClose>
          <X weight="bold" />
        </ButtonClose>
        <Dialog.Title>Sacola de compras</Dialog.Title>

        <CartContent>
          {products.length <= 0 && (
            <p>Seu carrinho está sem produtos, vamos comprar algo novo!!</p>
          )}

          {Object.entries(cartDetails).map(([itemId, item]) => (
            <CardCart
              key={itemId}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              id={itemId}
              quantity={item.quantity}
              removeProductCart={handleRemoveFromCart}
            />
          ))}
        </CartContent>

        <CartContentInfo>
          <CartQuantityContent>
            <p>Quantidade</p>
            <span>{cartCount}</span>
          </CartQuantityContent>
          <CartPriceContent>
            <p>Valor total</p>
            <strong>{formattedTotalPrice}</strong>
          </CartPriceContent>

          <ButtonFinishCart onClick={handleTest} type="button">
            Finalizar Compra
          </ButtonFinishCart>
        </CartContentInfo>
      </CartContainer>
    </Dialog.Portal>
  );
}
