import type { AppProps } from "next/app";
import { globalStyles } from "./styles/global";
import { Container } from "./styles/pages/app";
import { Header } from "../components/header/header";
import { CartProvider } from "use-shopping-cart";
import { CartContextProvider } from "@/contexts/CartContext";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <CartContextProvider>
      {" "}
      <CartProvider
        cartMode="checkout-session"
        stripe={process.env.STRIPE_PUBLIC_KEY}
        currency="BRL"
      >
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
      </CartProvider>
    </CartContextProvider>
  );
}
