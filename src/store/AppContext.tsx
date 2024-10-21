/* eslint-disable @typescript-eslint/no-empty-function */
import React, {createContext, useState} from "react";
import {MMKV} from "react-native-mmkv";
import {Product} from "../types/interfaces/Product";
import {User} from "../types/interfaces/User";
import {Address} from "../types/interfaces/Address";
import { OptionAddress} from "../types/interfaces/Option";
import { Order } from "../types/interfaces/Order";
interface cart {
  product: Product;
  quantity: number;
}

interface methodsProps {
  paymentMethods: {
    title: string
  },
  deliveryMethods: {
    title: string,
  },
}

export const AppContext = createContext({
  setMethods: (item:methodsProps) => {},
  method: {} as methodsProps,
  orders: [] as Order[],
  createOrder: (order: Order) => {},
  user: {} as User | null,
  token: "",
  isAuthenticated: false,
  cart: [] as cart[],
  address: [] as OptionAddress[],
  addAddress: (item: Address) => {},
  removeAddress: (item: string) => {},
  updateAddress: (id:string) => {},
  authenticate: () => {},
  logout: () => {},
  favorites: [] as Product[],
  addFavorite: (item: Product) => {},
  setItem: (item: Product) => {},
  removeItem: (id: number) => {},
  cartTotal: (): number => 0,
  getItemCount: (id: number): number => 0,
  decrease: (id: number) => {},
  clearCart: () => {},
});

export function AppContextProvider({children}: {children: React.ReactNode}) {
  const storage = new MMKV();
  const [token, setToken] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);
  const [method, setMethod] = useState<methodsProps>({
    paymentMethods: {
      title: ""
    },
    deliveryMethods: {
      title: "",
    },
  });
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<cart[]>([]);
  const [favorites, setFavorites] = useState<Product[]>(
    storage.getString("favorites")
      ? JSON.parse(storage.getString("favorites")!)
      : [],
  );
  const [address, setAddress] = useState<OptionAddress[]>(
    storage.getString("userAddress")
      ? JSON.parse(storage.getString("userAddress")!)
      : [],
  );

  function authenticate() {
    setToken(token);
  }

  function logout() {
    setToken("");
  }

  function addFavorite(item: Product) {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.some(fav => fav.id === item.id);
      const newFavorites = isFavorite
        ? prevFavorites.filter(fav => fav.id !== item.id)
        : [...prevFavorites, item];

      storage.set("favorites", JSON.stringify(newFavorites));

      return newFavorites;
    });
  }

  function setItem(item: Product) {
    const existingItem = cart.find(cartItem => cartItem.product.id === item.id);
    if (existingItem) {
      setCart(
        cart.map(cartItem =>
          cartItem.product.id === item.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem,
        ),
      );
    } else {
      setCart([...cart, {product: item, quantity: 1}]);
    }
  }

  function decrease(id: number) {
    setCart(
      cart.map(cartItem =>
        cartItem.product.id === id
          ? {...cartItem, quantity: cartItem.quantity - 1}
          : cartItem,
      ),
    );
  }

  function removeItem(id: number) {
    setCart(cart.filter(cartItem => cartItem.product.id !== id));
  }

  const cartTotal = () => {
    return cart.reduce(
      (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
      0,
    );
  };

  const getItemCount = (id: number) => {
    const item = cart.find(cartItem => cartItem.product.id === id);
    return item ? item.quantity : 0;
  };

  function clearCart() {
    setCart([]);
  }

  function addAddress(item: Address) {
    const optionAddress = {
      title: item.name,
      subtitle1: item.address,
      subtitle2: item.city,
      isSelected: false,
      data: item,
    };
    setAddress(prevAddresses => [...prevAddresses, optionAddress]);
    storage.set("userAddress", JSON.stringify([...address, optionAddress]));
  }

  function removeAddress(id: string) {
    if (address.length != 0) {
      const newListAddress = address.filter(address => address.data.id !== id);

      setAddress(newListAddress);
      storage.set("userAddress", JSON.stringify(newListAddress));
    }
  }

  function updateAddress(id: string) {
    const updatedAddresses = address.map(addr =>
      addr.data.id === id
        ? {...addr, isSelected: true}
        : {...addr, isSelected: false},
    );

    setAddress(updatedAddresses);
    storage.set("userAddress", JSON.stringify(updatedAddresses));
  }


  function createOrder(item:Order){
    setOrders(prevOrders => [...prevOrders, item]);
  }


  function setMethods(methods:methodsProps){
    setMethod(methods);
  }

  return (
    <AppContext.Provider
      value={{
        method: method,  
        setMethods: setMethods,
        orders: orders,
        createOrder: createOrder,
        addFavorite: addFavorite,
        user: user,
        token: token,
        isAuthenticated: !!token,
        address: address,
        addAddress: addAddress,
        removeAddress: removeAddress,
        updateAddress: updateAddress,
        cart: cart,
        authenticate: authenticate,
        logout: logout,
        favorites: favorites,
        cartTotal: cartTotal,
        setItem: setItem,
        getItemCount: getItemCount,
        removeItem: removeItem,
        decrease: decrease,
        clearCart: clearCart,
      }}>
      {children}
    </AppContext.Provider>
  );
}
