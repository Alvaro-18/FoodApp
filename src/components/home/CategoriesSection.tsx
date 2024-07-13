import {View, FlatList} from "react-native";
import {CategoryCard} from "./CategoryCard";
import {useNavigation} from "@react-navigation/native";
import {Category} from "../../types/interfaces/Category";

export function CategoriesSection({data}: {data: Category[]}) {
  return (
    <View style={{marginTop: 4}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CategoryCard
            onPress={() => {
              console.log("category");
            }}
            data={item}
          />
        )}
        horizontal={false}
        numColumns={4}
      />
    </View>
  );
}
