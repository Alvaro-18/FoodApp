import {View, FlatList} from "react-native";
import {CategoryCard} from "./CategoryCard";
interface categories {title:string}

export function CategoriesSection({data}: {data:categories[]}) {
  return (
    <View style={{marginTop: 4}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CategoryCard
            onPress={() => {
              //
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
