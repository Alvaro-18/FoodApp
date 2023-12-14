/* eslint-disable @typescript-eslint/no-empty-function */
import React, {createContext, useState} from "react";
import {Product} from "../types/interfaces/Product";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../types/interfaces/User";

export const AppContext = createContext({
  user: {} as User | null,
  token: "",
  isAuthenticated: false,
  cart: [] as Product[],
  authenticate: ()=> {},
  logout : ()=> {}
});

export function AppContextProvider({children}: {children: React.ReactNode}) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<Product[]>([]);

  function authenticate() {
    const token = JSON.stringify(AsyncStorage.getItem("token"));
    setToken(token);
  }

  function logout() {
    setToken("");
    AsyncStorage.removeItem("token");
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
      }}>
      {children}
    </AppContext.Provider>
  );
}
