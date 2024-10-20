import {useState} from "react";
import {Image, StyleSheet, TextInput, View, Text} from "react-native";
import { Colors } from "../../assets/constants/Colors";

export function InputField({
  placeholder,
  isInvalid,
  onChangeText,
  value,
}: {
  placeholder: string;
  isInvalid: boolean;
  onChangeText: (text: string) => void;
  value: string;
}) {
  const [focus, setFocus] = useState(false);
  function change(text:string){
    onChangeText(text);
    if(text === ""){
      setFocus(false);
    } else {
      setFocus(true);
    }
  }

  return (
    <View style={[styles.container, isInvalid && styles.inputError]}>
      <View style={styles.inputContainer}>
        <Text style={[focus ? styles.labelfocused : styles.disable, isInvalid && styles.labelErro]}>{placeholder}*</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#9B9B9B"
          onChangeText={(text) => {change(text);}}
          value={value} 
        />
      </View>
      <Image source={require("../../assets/images/Succes-icon.png")} style={(isInvalid || !focus) && styles.disable}/>
      <Image source={require("../../assets/images/Outline-close.png")} style={!isInvalid && styles.disable}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: Colors.green600,
    borderRadius: 8,
  },

  inputError:{
    borderColor: "red",
    borderWidth: 1,   
  },

  inputContainer: {
    width: "82%",
  },

  labelfocused: {
    color: "#9B9B9B",
    fontSize: 11,
    fontWeight: "400",
  },

  labelErro:{
    color:"red"
  },

  disable: {
    display: "none",
  },

  input: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
    padding: 0,
  },
});
