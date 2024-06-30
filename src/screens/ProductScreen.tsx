import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
  Text,
} from "react-native";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Colors} from "../assets/constants/Colors";
import {StorePresentationCard} from "../components/store/StorePresentationCard";
import {useEffect, useState} from "react";

import {STORE, PRODUCTS} from "../store/Data";
import {Product} from "../types/interfaces/Product";

export function ProductScreen({route}: {route: any}) {
  // id do produto
  // pegar os dados do produto na api

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function navigationHandler() {
    navigation.goBack();
  }
  const {id} = route.params;
  const [count, setCounter] = useState(1);
  const [isInTheCart, setIsInTheCart] = useState(false);
  const [dado, setDado] = useState<Product>();

  function setCart() {
    if (!isInTheCart) {
      addCart();
    } else {
      removeCart();
    }
  }

  useEffect(() => {
    async function fetchProduct() {
      const product = PRODUCTS.find(product => product.id === id);
      if (product) {
        setDado(product);
      } else {
        setDado(PRODUCTS[0]);
      }
    }

    fetchProduct();
  }, [id]);

  function addCart() {
    //adicionar ao carrinho;
    setIsInTheCart(true);
    // falta fazer o efeito de pressionar
  }

  function removeCart() {
    setIsInTheCart(false);
    setCounter(1);
  }

  function increaseCount() {
    setCounter(prevState => prevState + 1);
  }

  function decreaseCount() {
    if (count == 1) {
      setCounter(1);
    } else {
      setCounter(prevState => prevState - 1);
    }
  }

  function FetchImage({children}: {children: React.ReactNode}) {
    if (dado && dado.imageURL) {
      return (
        <ImageBackground source={{uri: dado.imageURL}} style={styles.banner}>
          {children}
        </ImageBackground>
      );
    } else {
      return <View>{children}</View>;
    }
  }

  if (!dado) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      <FetchImage>
        <View style={styles.container}>
          <Pressable onPress={navigationHandler}>
            <Image
              source={require("../assets/images/Arrow-back.png")}
              style={styles.icon}
            />
          </Pressable>
        </View>
      </FetchImage>

      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.name}>{dado.name}</Text>

            <Text style={styles.price}>R$ {dado.price}</Text>
          </View>

          <Text style={styles.description}>{dado.description}</Text>

          <StorePresentationCard dado={STORE[0]} />
        </View>

        <View>
          <View style={styles.totalContainer}>
            <View>
              <Text style={styles.totalLabel}>Total without tax:</Text>
              <Text style={styles.total}>
                RS: {(dado.price * count).toFixed(2)}
              </Text>
            </View>

            <Pressable
              style={
                isInTheCart ? styles.cartBtn : [styles.cartBtn, styles.disabled]
              }
              disabled={isInTheCart}>
              <Text style={styles.cartText}>View cart</Text>
            </Pressable>
          </View>

          <View style={styles.bottom}>
            <View style={styles.counterContainer}>
              <Pressable onPress={decreaseCount}>
                <Image
                  source={require("../assets/images/Minus-solid.png")}
                  style={styles.counterBtnIcon}
                />
              </Pressable>
              <Text style={styles.counterText}>{count}</Text>
              <Pressable onPress={increaseCount}>
                <Image
                  source={require("../assets/images/Plus-solid.png")}
                  style={styles.counterBtnIcon}
                />
              </Pressable>
            </View>

            <Pressable
              style={
                isInTheCart
                  ? [styles.addCartBtn, styles.removeCartBtn]
                  : styles.addCartBtn
              }
              onPress={setCart}>
              <Text style={{color: "#fff", fontSize: 18, fontWeight: "500"}}>
                {isInTheCart ? "Remove from cart" : "Add to cart"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 198,
  },

  container: {
    width: "92%",
    alignSelf: "center",
    justifyContent: "space-between",
    height: "73%",
  },

  header: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 18,
  },

  icon: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secundaryColor,
    borderRadius: 50,
    width: 32,
    height: 32,
  },

  name: {
    color: "#000",
    fontSize: 18,
    fontWeight: "500",
  },

  description: {
    marginTop: 6,
    marginBottom: 16,
    color: "#000",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "justify",
  },

  price: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },

  totalContainer: {
    backgroundColor: "#EAEAEA",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 4,
    paddingHorizontal: 8,
    paddingBottom: 10,
    borderBottomColor: "#AFAFAF",
    borderBottomWidth: 2,
    borderRadius: 2,
  },

  totalLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "#717171",
  },

  total: {
    fontWeight: "500",
    fontSize: 16,
    color: "#000",
    marginTop: 6,
  },

  cartBtn: {
    width: 100,
    alignItems: "center",
    backgroundColor: Colors.secundaryColor,
    borderRadius: 12,
    justifyContent: "center",
    marginTop: 10,
    height: 32,
  },

  disabled: {
    backgroundColor: "gray",
  },

  cartText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },

  bottom: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "28%",
    justifyContent: "space-between",
  },

  counterBtnIcon: {
    width: 24,
    height: 24,
    resizeMode: "center",
  },

  counterText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 24,
  },

  addCartBtn: {
    backgroundColor: Colors.secundaryColor,
    height: 36,
    width: "56%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },

  removeCartBtn: {
    backgroundColor: "#c91e2d",
  },
});
