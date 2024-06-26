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
import {useState} from "react";

const dado = {
  id: "19231-329-491-24",
  name: "Mediterranean Deligth Salad",
  imageURL:
    "https://img.freepik.com/fotos-gratis/frango-grelhado-arroz-grao-de-bico-picante-abacate-repolho-pimenta-na-tigela-buda_127032-1996.jpg?t=st=1718854008~exp=1718857608~hmac=efe25f2d1122db54173d5f6bb06442bf998610b6df108131bbc6109eae19c137&w=740",
  description:
    "Include crisp lettuce varieties like romaine, iceberg, or mixed greens as a base .you'll find tomatoes, cucumbers, and bell peppers.",
  price: 22.8,
  deliveryTime: "52 min - 60 min", // tempo médio de entrega e preparo
  store: {
    storeName: "Startbucks",
    storeImageUrl:
      "https://itaupowershopping.com.br/cont/uploads/2023/02/starbucks-1-1-1-1.jpg",
    storeDescription:
      "Starbucks is like a coffee wonderland. Imagine a cozy yet bustling space where the rich aroma of freshly brewed coffee envelops you the moment you step inside. ",
    storeNote: "7.2",
    category: "Restaurant",
  },
};

export function ProductScreen() {
  // id do produto
  // pegar os dados do produto na api

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function navigationHandler() {
    navigation.goBack();
  }

  const [count, setCounter] = useState(1);
  const [isInTheCart, setIsInTheCart] = useState(false);

  function setCart() {
    if(!isInTheCart) {
      addCart();
    } else {
      removeCart();
    }
  }

  function addCart(){
    //adicionar ao carrinho;
      setIsInTheCart(true);
      // falta fazer o efeito de pressionar
  }

  function removeCart(){
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
    if (dado.imageURL !== "" && dado.imageURL !== null) {
      return (
        <ImageBackground source={{uri: dado.imageURL}} style={styles.banner}>
          {children}
        </ImageBackground>
      );
    } else {
      return <View>{children}</View>;
    }
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
        <View style={styles.header}>
          <Text style={styles.name}>{dado.name}</Text>

          <Text style={styles.price}>R$ {dado.price}</Text>
        </View>

        <Text style={styles.description}>{dado.description}</Text>

        <StorePresentationCard dado={dado.store} />

        <View style={styles.totalContainer}>
          <View>
            <Text style={styles.totalLabel}>Total without tax:</Text>
            <Text style={styles.total}>RS: {(dado.price * count).toFixed(2)}</Text>
          </View>

          <Pressable style={(isInTheCart) ? styles.cartBtn : [styles.cartBtn, styles.disabled]} disabled={isInTheCart}>
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
              {isInTheCart ?  "Remove from cart" : "Add to cart" }
            </Text>
          </Pressable>
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
    marginTop: "76%",
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
