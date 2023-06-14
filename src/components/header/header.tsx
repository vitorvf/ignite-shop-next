// import Image from "next/image";
// import { Handbag } from "phosphor-react";

// import logoImg from "@/assets/logo.svg";
// import { CartButton, HeaderContainer } from "@/pages/styles/components/header";

// export function Header() {
//   function handleHeaderCart() {
//     console.log("Clicou no Cart do Header");
//   }
//   return (
//     <HeaderContainer>
//       <Image src={logoImg} alt="Logo Ignite Shop" />
//       <CartButton onClick={handleHeaderCart}>
//         <Handbag size={24} weight="bold" />
//       </CartButton>
//     </HeaderContainer>
//   );
// }

import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import { Bag } from "phosphor-react";
import { useContext } from "react";
import logoImg from "../../assets/logo.svg";

import { ButtonCartContainer, HeaderContainer } from "./styles";
import Image from "next/image";
import { Cart } from "../cart/cart";
import { useShoppingCart } from "use-shopping-cart";
import { CartContext } from "@/contexts/CartContext";

export function Header() {
  const { pathname } = useRouter();
  // const { cartCount } = useShoppingCart();
  const { cartItems } = useContext(CartContext);
  // const showCartButton = pathname !== "/success";

  const cartCount = cartItems.length;

  return (
    <HeaderContainer>
      <Image src={logoImg} alt="" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ButtonCartContainer>
            <Bag weight="bold" />
            <span>{cartCount}</span>
          </ButtonCartContainer>
        </Dialog.Trigger>
        <Cart />
      </Dialog.Root>
    </HeaderContainer>
  );
}
