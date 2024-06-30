import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Store} from "../../types/interfaces/Store";
import { NoteIndicator } from "../UI/NoteIndicator";

export function StorePresentationCard({dado}: {dado: Store}) {
  return (
    <Pressable style={styles.card}>
      <View style={styles.header}>
        <View style={styles.header}>
          <Image
            source={{uri: dado.logoURL}}
            style={styles.storeIcon}
          />
          <Text style={styles.storeName}>{dado.name}</Text>
        </View>

        <NoteIndicator note={dado.note} />
      </View>

      <Text style={styles.storeDescription}>{dado.description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingLeft: 8,
    paddingRight: 14,
    paddingTop: 6,
    paddingBottom: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4,
    elevation: 7,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  storeIcon: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },

  storeName: {
    marginLeft: 4,
    color: "#000",
  },

  storeDescription: {
    marginTop: 4,
    color: "#000",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "justify",
  },
});
