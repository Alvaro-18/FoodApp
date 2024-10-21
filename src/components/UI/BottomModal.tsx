import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {memo} from "react";
import {Colors} from "../../assets/constants/Colors";

interface DataProps {
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  data: {
    id:string
  };
}

interface BottomModalProps<T extends DataProps> {
  onItemPress: (id:string) => void;
  data: T[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const BottomModal = memo(
  <T extends DataProps>({
    onItemPress,
    data,
    title,
    isOpen,
    onClose,
  }: BottomModalProps<T>) => {
    return (
      <Modal style={styles.container} visible={isOpen} transparent={true}>
        <Pressable style={styles.closeButton} onPress={onClose} />
        <View style={styles.modalContainer}>
          <View style={styles.bar} />
          <Text style={styles.title}>{title}</Text>
          <FlatList
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            style={styles.list}
            data={data}
            keyExtractor={item => data.indexOf(item).toString()}
            renderItem={({item}) => (
              <Pressable style={styles.item} onPress={() => onItemPress(item.data.id)}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                {item.subtitle1 && <Text style={styles.itemSubtitle}>{item.subtitle1}</Text>}
                {item.subtitle2 && <Text style={styles.itemSubtitle}>{item.subtitle2}</Text>}
              </Pressable>
            )}
          />
        </View>
      </Modal>
    );
  },
);

BottomModal.displayName = "BottomModal";

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },

  closeButton: {
    height: "60%",
  },

  modalContainer: {
    backgroundColor: Colors.green600,
    height: "40%",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },

  bar: {
    width: 100,
    alignSelf: "center",
    marginTop: 12,
    backgroundColor: Colors.gray200,
    height: 6,
    borderRadius: 50,
  },

  title: {
    alignSelf: "center",
    fontSize: 20,
    marginVertical: 12,
    color: Colors.white200,
    fontWeight: "600",
  },

  list: {
    marginBottom: 4
  },

  separator: {
    height: 8,
  },

  item: {
    width: "94%",
    alignSelf: "center",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 4,
  },

  itemTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.dark600,
    paddingBottom: 2,
  },

  itemSubtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.gray600,
  },
});
