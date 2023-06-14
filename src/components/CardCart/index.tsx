import Image from "next/image";
import { CartItemContainer } from "./styles";
import logoImg from "../../assets/logo.svg";
import { useShoppingCart } from "use-shopping-cart";
import { Trash } from "phosphor-react";
import { useCart } from "@/hooks/useCart";
import { useContext, useState } from "react";
import { CartContext } from "@/contexts/CartContext";
import { QuantityInput } from "../QuantityInput";
import * as S from "./styles";

export function CardCart({
  name,
  price,
  imageUrl,
  removeProductCart,
  id,
  quantity,
}) {
  const { cartItems, changeCartItemQuantity, incrementItem } =
    useContext(CartContext);

  const handleRemoveFromCart = () => {
    removeProductCart(id);
  };

  function handleIncrease() {
    changeCartItemQuantity(id, +1);
  }

  function handleDecrease() {
    changeCartItemQuantity(id, -1);
  }

  return (
    <S.CartItemContainer>
      <S.ImageContainer>
        <Image src={imageUrl} width={102} height={93} alt="" />
      </S.ImageContainer>
      <S.InfoContainer>
        <span>{name}</span>
        <strong>{price}</strong>
        <div className="actionsContainer">
          <QuantityInput
            quantity={quantity}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />
          <button onClick={handleRemoveFromCart} className="removeButton">
            Remover
          </button>
        </div>
      </S.InfoContainer>
    </S.CartItemContainer>
  );
}
