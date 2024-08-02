/* eslint-disable @typescript-eslint/no-empty-function */
import React, {createContext, useState} from "react";
import {Product} from "../types/interfaces/Product";
import {User} from "../types/interfaces/User";
interface cart {
  product: Product,
  quantity: number
}

export const AppContext = createContext({
  user: {} as User | null,
  token: "",
  isAuthenticated: false,
  cart: [] as cart[],
  authenticate: () => {},
  logout: () => {},
  favorites: [] as Product[],
  addFavorite: (item: Product) => {},
  setItem: (item: Product) => {},
  removeItem: (id: number) => {},
  cartTotal: ():number => 0,
  getItemCount: (id: number): number  => 0,
  decrease: (id:number) => {},
  clearCart: () => {}
});

export function AppContextProvider({children}: {children: React.ReactNode}) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<cart[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  function authenticate() {
    setToken(token);
  }

  function logout() {
    setToken("");
  }

 
  function addFavorite(item: Product) {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter(fav => fav.id != item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  }

  function setItem(item: Product) {
    const existingItem = cart.find(cartItem => cartItem.product.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.product.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { product: item, quantity: 1 }]);
    }
  }

  function decrease(id: number) {
      setCart(cart.map(cartItem =>
        cartItem.product.id === id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
  }

  function removeItem(id: number) {
    setCart(cart.filter(cartItem => cartItem.product.id !== id));
  }

  const cartTotal = () => {
    return cart.reduce((total, cartItem) => total + cartItem.product.price * cartItem.quantity, 0);
  };

  const getItemCount = (id: number) => {
    const item = cart.find(cartItem => cartItem.product.id === id);
    return item ? item.quantity : 0;
  };

  function clearCart() {
    setCart([]);
  }




  return (
    <AppContext.Provider
      value={{
        addFavorite: addFavorite,
        user: user,
        token: token,
        isAuthenticated: !!token,
        cart: cart,
        authenticate: authenticate,
        logout: logout,
        favorites: favorites,
        cartTotal: cartTotal,
        setItem:setItem,
        getItemCount: getItemCount,
        removeItem: removeItem,
        decrease: decrease,
        clearCart: clearCart
      }}>
      {children}
    </AppContext.Provider>
  );
}
