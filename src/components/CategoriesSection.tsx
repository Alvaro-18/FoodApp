import {View, FlatList} from "react-native";
import {CategoryCard} from "../components/CategoryCard";

export function CategoriesSection({data}: {data: [
  {title:string},
  {title:string},
  {title:string},
  {title:string},
  {title:string},
  {title:string},
  {title:string},
  {title:string},
]}) {
  return (
    <View>
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
