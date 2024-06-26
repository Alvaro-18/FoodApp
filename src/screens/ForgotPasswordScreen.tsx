import {View, Text, StyleSheet, ImageBackground, Alert} from "react-native";
import {useForm, Controller} from "react-hook-form";
import {Colors} from "../assets/constants/Colors";
import {InputField} from "../components/auth/InputField";
import {PrimaryButton} from "../components/UI/PrimaryButton";
import {resetPassword} from "../services/Authentication";
import {useNavigation} from "@react-navigation/native";
import {GoBackButton} from "../components/UI/GoBackButton";

export function ForgotPasswordScreen() {
  const navigation = useNavigation<any>();
  const {
    control,
    handleSubmit,
    resetField,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  function navigationHandler() {
    navigation.goBack();
  }

  const onSubmit = async (userData: {email: string}) => {
    try {
      resetPassword(userData.email);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Not a valid email address. Should be your@email.com.",
      );
    }
    resetField("email", {defaultValue: ""});
    Alert.alert("Email send!", "Please, check your email.");
  };

  return (
    <ImageBackground
      source={require("../assets/images/Background.png")}
      style={styles.background}>
      <View style={styles.container}>
        <GoBackButton onPress={navigationHandler} />

        <Text style={[styles.title, styles.textDetail]}>
          Sign
          <Text style={styles.title}> up</Text>
        </Text>

        <Text style={styles.paragraph}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>

        <View style={styles.formContainer}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
            }}
            render={({field: {onChange, value}, fieldState}) => (
              <InputField
                placeholder="Email"
                onChangeText={onChange}
                isInvalid={fieldState.invalid}
                value={value}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.alertText}>Not a valid email address.</Text>
          )}
        </View>

        <PrimaryButton onPress={handleSubmit(onSubmit)}>SEND</PrimaryButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    backgroundColor: "#fff",
  },
  container: {
    alignSelf: "center",
    width: "90%",
    marginTop: "6%",
  },
  title: {
    marginTop: "8%",
    color: "#000",
    fontSize: 34,
    fontWeight: "bold",
  },
  textDetail: {
    color: Colors.secundaryColor,
  },
  paragraph: {
    marginTop: "18%",
    color: "#222222",
    fontSize: 14,
    fontWeight: "500",
  },
  formContainer: {
    marginTop: "6%",
    marginBottom: "10%",
    gap: 10,
  },
  alertText: {
    color: "red",
  },
});
