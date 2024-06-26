import {useState} from "react";
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
  const hasNotification = false;

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

          <View style={styles.triangle}></View>
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
    marginTop: "6%",
    alignItems: "flex-end",
    width: "95%",
    justifyContent: "flex-end",
    paddingHorizontal: "3.8%",
  },

  image: {
    width: 24,
    height: 22,
  },

  triangle: {
    marginTop: 6,
    borderLeftWidth: 10,
    borderLeftColor: "#F2F2F2",
    borderRightWidth: 10,
    borderRightColor: "#F2F2F2",
    borderBottomWidth: 20,
    borderBottomColor: "#D9D9D9",
  },

  notificationContainer: {
    width: "100%",
    height: 226,
    padding: 6,
    backgroundColor: "#D9D9D9",
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
    backgroundColor: Colors.secundaryColor,
    borderRadius: 50,
    position: "absolute",
    alignSelf: "flex-end",
  },
});
