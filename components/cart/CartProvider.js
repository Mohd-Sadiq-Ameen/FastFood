'use client';

import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  /*
  -------------------------
  Load from localStorage
  -------------------------
  */

  useEffect(() => {
    const saved = localStorage.getItem('thala-cart');

    if (saved) {
      setCart(JSON.parse(saved));
    }
  }, []);

  /*
  -------------------------
  Save to localStorage
  -------------------------
  */

  useEffect(() => {
    localStorage.setItem(
      'thala-cart',

      JSON.stringify(cart)
    );
  }, [cart]);

  /*
  -------------------------
  Add Item
  -------------------------
  */

  const addItem = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.slug === item.slug);

      if (exists) {
        return prev.map((i) =>
          i.slug === item.slug
            ? {
                ...i,

                quantity: i.quantity + 1,
              }
            : i
        );
      }

      return [
        ...prev,

        {
          ...item,

          quantity: 1,
        },
      ];
    });
  };

  /*
  -------------------------
  Increase
  -------------------------
  */

  const increase = (slug) => {
    setCart((prev) =>
      prev.map((item) =>
        item.slug === slug
          ? {
              ...item,

              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  /*
  -------------------------
  Decrease
  -------------------------
  */

  const decrease = (slug) => {
    setCart((prev) =>
      prev.flatMap((item) => {
        if (item.slug !== slug) {
          return item;
        }

        if (item.quantity === 1) {
          return [];
        }

        return {
          ...item,

          quantity: item.quantity - 1,
        };
      })
    );
  };

  /*
  -------------------------
  Remove Item
  -------------------------
  */

  const removeItem = (slug) => {
    setCart((prev) => prev.filter((i) => i.slug !== slug));
  };

  /*
  -------------------------
  Clear Cart
  -------------------------
  */

  const clearCart = () => {
    setCart([]);
  };

  /*
  -------------------------
  Helpers
  -------------------------
  */

  const getQuantity = (slug) => {
    const item = cart.find((i) => i.slug === slug);

    return item?.quantity || 0;
  };

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,

    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,

    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,

        addItem,

        increase,

        decrease,

        removeItem,

        clearCart,

        getQuantity,

        totalItems,

        totalPrice,

        open,

        setOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
