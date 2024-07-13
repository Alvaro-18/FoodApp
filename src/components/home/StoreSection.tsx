import {View, Text, StyleSheet, FlatList} from "react-native";
import {Store} from "../../types/interfaces/Store";
import {StoreCard} from "./StoreCard";
import {memo, useCallback} from "react";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {ParamListBase, useNavigation} from "@react-navigation/native";

export const StoreSection = memo(
  ({data, title}: {data: Store[]; title: string}) => {
    const navigation =
      useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const navigationHandler = useCallback((item: Store) => {
      navigation.navigate("store", {id: item.id});
    }, []);

    return (
      <View>
        <Text style={styles.title}>{title}</Text>

        <FlatList
          data={data}
          renderItem={({item}) => <StoreCard data={item} onPress={navigationHandler}/>}
          horizontal={true}
          maxToRenderPerBatch={2}
        />
      </View>
    );
  },
);

StoreSection.displayName = "StoreSection";

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: "4%",
  },
});
