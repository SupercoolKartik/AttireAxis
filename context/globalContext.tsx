"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(undefined);

interface CartItem {
  name: string;
  qty: number;
  color: string;
  price: number;
  size: string;
}

type Cart = Record<string, CartItem>;

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart>({});
  const [subTotal, setSubTotal] = useState<number>(0);

  //// These functions goes like Add/Remove/Delete-> saceCartToLocal-> calculating subTotal -> save subTotal value to Local

  //Function to ADD AN ITEM to the cart
  const addToCart = (
    itemCode: string,
    name: string,
    qty: number,
    color: string,
    price: number,
    size: string
  ) => {
    const newCart: Cart = cart;

    if (itemCode in newCart) {
      newCart[itemCode].qty += qty;
    } else {
      newCart[itemCode] = { name, qty, color, price, size };
    }

    setCart(newCart);
    saveCartToLocal(newCart);
  };

  //Function to REMOVE AN ITEM from the cart
  const removeFromCart = (itemCode: string) => {
    const newCart: Cart = cart;

    if (itemCode in newCart) {
      if (newCart[itemCode].qty > 1) {
        newCart[itemCode].qty--;
      } else {
        delete newCart[itemCode];
      }
    }

    setCart(newCart);
    saveCartToLocal(newCart);
  };

  //Function to Delete the cart/Clear all the cart items
  const clearCart = () => {
    setCart({});
    saveCartToLocal({});
    localStorage.setItem("subTotal", "0");
  };

  //Function to save the newCart(Cart with changed cart items) in the local Storage
  const saveCartToLocal = (newCart: Cart) => {
    const cartval = JSON.stringify(newCart);
    localStorage.setItem("cart", cartval);

    //Calling the calcSubtotal every time items changes in cart
    calcSubtotal(newCart);
  };

  //Function to calculate the Subtotal of the items in the cart
  const calcSubtotal = (newCart: Cart) => {
    let subt = 0;
    let keys = Object.keys(newCart);
    for (let i = 0; i < keys.length; i++) {
      subt += newCart[keys[i]].price * newCart[keys[i]].qty;
    }
    setSubTotal(subt);

    //Setting the Sub Total value to local storage every time the subTotal changes
    localStorage.setItem("subTotal", subt.toString());
  };

  useEffect(() => {
    try {
      //Storing data on the cart key on the local storage of the browser to the cart state
      const localCart = localStorage.getItem("cart");
      if (localCart) {
        setCart(JSON.parse(localCart));
      }
      //Storing data on the subTotal key on the local storage of the browser to the subTotal state
      const localTotal = localStorage.getItem("subTotal");
      if (localTotal) {
        setSubTotal(parseInt(localTotal));
      }
    } catch (error) {
      console.log(
        "Error while saving local storage Cart data to cart state/subTotal data to subTotal state :",
        error
      );
      localStorage.clear();
    }
  }, []);

  return (
    <AppContext.Provider
      // value={{ cart, addToCart, removeFromCart, clearCart, subTotal }}
      value={{ cart, addToCart, removeFromCart, clearCart, subTotal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
