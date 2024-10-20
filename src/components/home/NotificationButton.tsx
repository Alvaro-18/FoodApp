import { useState} from "react";
import {
  View,
  Pressable,
  Image,
  Modal,
  StyleSheet,
  FlatList,
} from "react-native";
import {Colors} from "../../assets/constants/Colors";
import {NotificationCard} from "./NotificationCard";
import {NOTIFICATIONS} from "../../store/Data";

export function NotificationButton() {
  const [visibility, setVisibility] = useState(false);
  const hasNotification = NOTIFICATIONS.find((notification) => notification.isRead);

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={visibility}>
        <View style={styles.modalContainer}>
          <Pressable
            onPress={() => {
              setVisibility(false);
            }}
            style={({pressed}) => pressed && styles.pressed}>
            <Image
              source={require("../../assets/images/Bell-icon.png")}
              style={styles.image}
              resizeMode="center"
            />
            <View style={hasNotification && styles.badge} />
          </Pressable>

          <View style={styles.notificationContainer}>
            <FlatList
              data={NOTIFICATIONS}
              renderItem={({item}) => (
                <NotificationCard
                  title={item.title}
                  description={item.description}
                  isRead={item.isRead}
                />
              )}
            />
          </View>
        </View>
        <Pressable
          style={styles.screen}
          onPress={() => {
            setVisibility(false);
          }}></Pressable>
      </Modal>

      <Pressable
        onPress={() => {
          setVisibility(true);
        }}
        style={({pressed}) => pressed && styles.pressed}>
        <Image
          source={require("../../assets/images/Bell-icon.png")}
          style={styles.image}
          resizeMode="center"
        />
        <View style={hasNotification && styles.badge} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    alignSelf: "center",
    marginTop: "4%",
    alignItems: "flex-end",
    width: "96%",
    justifyContent: "flex-end",
    paddingHorizontal: "2%"
  },

  image: {
    width: 24,
    height: 22,
  },

  notificationContainer: {
    marginTop: 16,
    width: "100%",
    height: 226,
    padding: 10,
    backgroundColor: Colors.green600,
    borderRadius: 8,
  },

  pressed: {
    opacity: 0.5,
  },

  screen: {
    height: "100%",
  },

  badge: {
    width: 10,
    height: 10,
    backgroundColor: Colors.green600,
    borderRadius: 50,
    position: "absolute",
    alignSelf: "flex-end",
  },
});
