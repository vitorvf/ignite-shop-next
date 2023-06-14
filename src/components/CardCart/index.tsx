import Image from "next/image";
import { CartItemContainer } from "./styles";
import logoImg from "../../assets/logo.svg";
import { useShoppingCart } from "use-shopping-cart";
import { Trash } from "phosphor-react";
import { useCart } from "@/hooks/useCart";
import { useContext } from "react";
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
  // const {
  //   cartDetails,
  //   cartCount,
  //   totalPrice,
  //   formattedTotalPrice,
  //   removeItem,
  // } = useShoppingCart();

  // function handleIncrease() {
  //   changeCartItemQuantity(+1);
  // }

  // function handleonDecrease() {
  //   changeCartItemQuantity(-1);
  // }

  // {
  //   cartItems.map((cartitem) => {
  //     console.log(cartitem.name);
  //   });
  // }

  const handleRemoveFromCart = () => {
    removeProductCart(id);
  };

  console.log(id);

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
            quantity={1}
            // onDecrease={handleDecrease}
            // onIncrease={handleIncrease}
          />
          <button onClick={handleRemoveFromCart} className="removeButton">
            Remover
          </button>
        </div>
      </S.InfoContainer>
    </S.CartItemContainer>
    // <CardCartContainer>
    //   <ImageCardCartContainer>
    //     <Image src={imageUrl} alt="" width={94} height={90} />
    //   </ImageCardCartContainer>
    //   <CardCartContente>
    //     <p>
    //       {name} ({quantity})
    //     </p>
    //     <span>{price}</span>
    //     <button onClick={handleRemoveFromCart} type="button">
    //       Remover
    //     </button>
    //   </CardCartContente>
    // </CardCartContainer>
  );
}
