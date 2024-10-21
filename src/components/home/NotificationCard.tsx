import {View, Pressable, StyleSheet, Text} from "react-native";
import {Colors} from "../../assets/constants/Colors";
import {memo, useState} from "react";

export const NotificationCard = memo(
  ({
    title,
    description,
    isRead,
  }: {
    title: string;
    description: string;
    isRead: boolean;
  }) => {
    const [read, setRead] = useState(isRead);

    return (
      <Pressable style={styles.button} onPress={() => setRead(true)}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <View style={!read && styles.badge} />
        </View>

        <Text style={styles.description}>{description}</Text>
      </Pressable>
    );
  },
);

NotificationCard.displayName = "NotificationCard";

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    width: "95%",
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "#fff",
    marginBottom: 12,
    borderRadius: 4,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },

  badge: {
    width: 10,
    height: 10,
    backgroundColor: Colors.green600,
    borderRadius: 50,
  },

  description: {
    color: "#000",
    fontSize: 10,
    fontWeight: "500",
  },
});
