import { StyleSheet, Text, View } from "react-native";
import { Message } from "../../types/interfaces/Message";
import { Colors } from "../../assets/constants/Colors";
import { MessageStatus } from "../../types/enums/MessageStatus";

export function MsgContainer(data: Message) {
  if (MessageStatus.RECEIVED == data.status) {
    return (
      <View style={[styles.msgContainer, {alignSelf: "flex-start"}]}>
        <View style={[styles.message, {backgroundColor: "#D9D9D9"}]}>
          <Text style={styles.msgText}>{data.message}</Text>
        </View>

        <Text style={[styles.msgDate, {marginLeft: 8}]}>
          {data.createdAt.substring(10, 16)}
        </Text>
      </View>
    );
  }
  return (
    <View style={[styles.msgContainer, {alignSelf: "flex-end"}]}>
      <Text style={[styles.msgDate, {marginRight: 8}]}>
        {data.createdAt.substring(10, 16)}
      </Text>

      <View style={[styles.message, {backgroundColor: Colors.secundaryColor}]}>
        <Text style={styles.msgText}>{data.message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  msgContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "flex-end",
  },

  msgDate: {
    color: "#000",
    fontSize: 10,
    fontWeight: "500",
  },

  message: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    maxWidth: 220,
  },

  msgText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
  },
});