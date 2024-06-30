/* eslint-disable @typescript-eslint/no-empty-function */
import React, {createContext, useState} from "react";
import {Product} from "../types/interfaces/Product";
import { User } from "../types/interfaces/User";

export const AppContext = createContext({
  user: {} as User | null,
  token: "",
  isAuthenticated: false,
  cart: [] as Product[],
  authenticate: ()=> {},
  logout : ()=> {},
  favorites: [] as Product[]
});

export function AppContextProvider({children}: {children: React.ReactNode}) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  function authenticate() {
    setToken(token);
  }

  function logout() {
    setToken("");
  }

  return (
    <AppContext.Provider
      value={{
        user: user,
        token: token,
        isAuthenticated: !!token,
        cart: cart,
        authenticate: authenticate,
        logout: logout,
        favorites:favorites,
      }}>
      {children}
    </AppContext.Provider>
  );
}
