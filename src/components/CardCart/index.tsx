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
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleonDecrease}
              quantity={coffee.quantity}
              size="small"
            />
            <RemoveButton onClick={handleRemoveItem} type="button">
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
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
