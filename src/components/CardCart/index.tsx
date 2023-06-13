import Image from "next/image";
import {
  ActionsContainer,
  CardCartContainer,
  CardCartContente,
  CoffeeCartCardContainer,
  ImageCardCartContainer,
  RemoveButton,
} from "./styles";
import logoImg from "../../assets/logo.svg";
import { useShoppingCart } from "use-shopping-cart";
import { Trash } from "phosphor-react";
import { useCart } from "@/hooks/useCart";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export function CardCart({
  name,
  price,
  imageUrl,
  removeProductCart,
  id,
  quantity,
}) {
  const {
    cartDetails,
    cartCount,
    totalPrice,
    formattedTotalPrice,
    removeItem,
  } = useShoppingCart();

  const handleRemoveFromCart = () => {
    removeItem(id);
  };

  return (
    <CardCartContainer>
      <ImageCardCartContainer>
        <Image src={imageUrl} alt="" width={94} height={90} />
      </ImageCardCartContainer>
      <CardCartContente>
        <p>
          {name} ({quantity})
        </p>
        <span>{price}</span>
        <button onClick={handleRemoveFromCart} type="button">
          Remover
        </button>
      </CardCartContente>
    </CardCartContainer>
  );
}
