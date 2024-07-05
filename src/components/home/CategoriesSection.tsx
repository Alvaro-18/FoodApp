import {View, FlatList} from "react-native";
import {CategoryCard} from "./CategoryCard";
import { useNavigation } from "@react-navigation/native";
interface categories {title:string}

export function CategoriesSection({data}: {data:categories[]}) {
  const navigation = useNavigation();

  return (
    <View style={{marginTop: 4}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CategoryCard
            onPress={() => {
              navigation.navigate("cart");
            }}
            title={item.title}
          />
        )}
        horizontal={false}
        numColumns={4}
      />
    </View>
  );
}
