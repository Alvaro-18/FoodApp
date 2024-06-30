import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {Colors} from "../assets/constants/Colors";
import {StorePresentationCard} from "../components/store/StorePresentationCard";
import {StoreStatus} from "../types/enums/StoreStatus";
import {ContactButtons} from "../components/UI/ContactButtons";
import {PRODUCTS} from "../store/Data";
import {ProductCard} from "../components/store/ProductCard";
import {useCallback} from "react";
import {Product} from "../types/interfaces/Product";
const dado = {
  name: "Startbucks",
  status: StoreStatus.OPEN,
  logoURL:
    "https://upload.wikimedia.org/wikipedia/pt/0/0f/Starbucks_Corporation_Logo_2011.svg.png",
  bannerURL:
    "https://www.cartacapital.com.br/wp-content/uploads/2023/11/1280px-Starbucks_Coffee_Mannheim_August_2012.jpeg",
  description:
    "Starbucks is like a coffee wonderland. Imagine a cozy yet bustling space where the rich aroma of freshly brewed coffee envelops you the moment you step inside. ",
  note: "7.2",
  category: "Restaurant",
};

export function StoreScreen() {
  // id do produto
  // pegar os dados do produto na api

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function navigationHandler() {
    navigation.goBack();
  }

  const productNavigation = useCallback((item: Product) => {
    navigation.navigate("product", {id: item.id});
  }, []);

  function FetchImage({children}: {children: React.ReactNode}) {
    if (dado.bannerURL !== "" && dado.bannerURL !== null) {
      return (
        <ImageBackground source={{uri: dado.bannerURL}} style={styles.banner}>
          {children}
        </ImageBackground>
      );
    } else {
      return <View>{children}</View>;
    }
  }

  function listHeader() {
    return (
      <View style={{marginBottom: 20}}>
        <FetchImage>
          <View style={styles.container}>
            <Pressable onPress={navigationHandler}>
              <Image
                source={require("../assets/images/Arrow-back.png")}
                style={styles.icon}
              />
            </Pressable>
          </View>
          <View style={styles.cardContainer}>
            <StorePresentationCard dado={dado} />
          </View>
        </FetchImage>

        <View style={styles.container}>
          <View style={styles.statusContainer}>
            <Text style={styles.text}>
              Status:
              <Text style={styles.statusText}> Open for delivery</Text>
            </Text>
            <ContactButtons />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        ListHeaderComponent={listHeader}
        data={PRODUCTS}
        renderItem={({item}) => <ProductCard data={item} onPress={productNavigation}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 198,
  },

  cardContainer: {
    width: "92%",
    alignSelf: "center",
    marginTop: 126,
  },

  container: {
    width: "92%",
    alignSelf: "center",
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

  statusContainer: {
    borderBottomColor: "#BBBBBB",
    borderBottomWidth: 2,
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 4,
  },

  text: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
  },

  statusText: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.secundaryColor,
  },
});
