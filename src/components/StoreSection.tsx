import {View, Text, StyleSheet, FlatList} from "react-native";
import {Store} from "../types/interfaces/Store";
import {StoreCard} from "./StoreCard";
import {memo} from "react";

export const StoreSection = memo(
  ({data, title}: {data: Store[]; title: string}) => {
    return (
      <View>
        <Text style={styles.title}>{title}</Text>

        <FlatList
          data={data}
          renderItem={({item}) => <StoreCard data={item} />}
          horizontal={true}
          maxToRenderPerBatch={2}
        />
      </View>
    );
  });

StoreSection.displayName = "StoreSection";

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: "4%",
  },
});
