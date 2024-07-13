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
import {ContactButtons} from "../components/UI/ContactButtons";
import { STORE} from "../store/Data";
import {ProductCard} from "../components/store/ProductCard";
import {useCallback, useEffect, useState} from "react";
import {Product} from "../types/interfaces/Product";
import { Store } from "../types/interfaces/Store";

export function StoreScreen({route}: {route: any}) {
  const {id} = route.params;
  const [dado, setDado] = useState<Store>();
  
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function navigationHandler() {
    navigation.goBack();
  }

  const chatHandler = useCallback((item: Store) => {
    navigation.navigate("chat", {id: item.id});
  }, []);

  function phoneHandler(){
    console.log("ring");
  }

  const productNavigation = useCallback((item: Product) => {
    navigation.navigate("product", {id: item.id});
  }, []);

  useEffect(() => {
    async function fetchStore() {
      const store = STORE.find(store => store.id === id);
      if (store) {
        setDado(store);
      } 
    }
    
    fetchStore();
  }, [id]);

  function FetchImage({children}: {children: React.ReactNode}) {
    if (dado && dado.bannerURL) {
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
            <StorePresentationCard dado={(dado) ? dado : STORE[0]} />
          </View>
        </FetchImage>

        <View style={styles.container}>
          <View style={styles.statusContainer}>
            <Text style={styles.text}>
              Status:
              <Text style={styles.statusText}> Open for delivery</Text>
            </Text>
            <ContactButtons onPressChatBtn={chatHandler} onPressPhoneBtn={phoneHandler} data={(dado) ? dado : STORE[0]}/>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        ListHeaderComponent={listHeader}
        data={dado?.products}
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
