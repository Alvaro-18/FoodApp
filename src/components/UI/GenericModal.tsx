import {Pressable, StyleSheet, Text, View} from "react-native";
import {CircleCheck, CircleX, X} from "lucide-react-native";
import {Colors} from "../../assets/constants/Colors";

interface ModalProps {
  type: "success" | "error";
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export function GenericModal({message, type, isOpen, onClose}: ModalProps) {

  if (!isOpen) return null;

  return (
      <Pressable
        style={styles.container}
        onPress={onClose}>
        <View
          style={[
            styles.modalBackground,
            type == "success"
              ? {borderColor: Colors.green600}
              : {borderColor: Colors.red200},
          ]}>
          <X size={32} color={Colors.red600} style={{alignSelf: "flex-end"}} />

          <Text style={styles.textModal}>{message}</Text>

          {type == "success" ? (
            <CircleCheck
              size={80}
              color={Colors.green600}
              style={{marginTop: 12}}
            />
          ) : (
            <CircleX size={80} color={Colors.red200} style={{marginTop: 12}} />
          )}
        </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position:"absolute",
    height:"100%",
    width:"100%",
    zIndex: 2,
    justifyContent:"center",
    alignItems:"center"
  },
  alertText: {
    color: "red",
    marginVertical: "2%",
  },
  modalBackground: {
    width: "84%",
    height: "24%",
    backgroundColor: Colors.white200,
    alignSelf: "center",
    padding: 8,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
  },

  textModal: {
    color: Colors.dark600,
    fontSize: 18,
    marginTop: 12,
    fontWeight: "600",
  },
});
