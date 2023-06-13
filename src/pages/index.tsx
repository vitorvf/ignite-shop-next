import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

import Image from "next/image";
import { HomeContainer, Product } from "./styles/pages/home";
import { Bag, Handbag } from "phosphor-react";

import "keen-slider/keen-slider.min.css";
import { stripe } from "@/lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { CartButton } from "@/styles/pages/home";
import { useShoppingCart } from "use-shopping-cart";
import { MouseEvent } from "react";
import { formatCurrency } from "@/utils/formateCurrency";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  const {
    addItem,
    removeItem,
    cartCount,
    formattedTotalPrice,
    cartDetails,
    totalPrice,
    clearCart,
  } = useShoppingCart();

  // Exemplo de adição de um item ao carrinho

  // const handleAddItem = (products) => {
  //   const item = {
  //     id: products.id,
  //     name: products.name,
  //     price: products.price,
  //     currency: "USD",
  //     quantity: 1,
  //   };
  //   addItem(item);
  // };

  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>, product) => {
    event.preventDefault();
    addItem(product);
  };

  const handleRemoveFromCart = (productId) => {
    removeItem(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  // Exemplo de remoção de um item do carrinho
  // const handleRemoveItem = (item: any) => {
  //   removeItem(item);
  // };
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{formatCurrency.format(product.price / 100)}</span>
                  </div>

                  <CartButton
                    onClick={(event) => handleAddToCart(event, product)}
                  >
                    {" "}
                    {/* Adicione este botão */}
                    <Handbag size={24} weight="bold" />
                  </CartButton>

                  {/* <button onClick={handleClearCart}>Clear Cart</button> */}
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      numberPrice: price.unit_amount / 100,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  };
};
