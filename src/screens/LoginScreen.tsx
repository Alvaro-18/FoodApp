import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Alert,
} from "react-native";
import {useForm, Controller} from "react-hook-form";
import {Colors} from "../assets/constants/Colors";
import {InputField} from "../components/auth/InputField";
import {PrimaryButton} from "../components/UI/PrimaryButton";
import {SocialButtons} from "../components/auth/SocialButtons";
import {logUser} from "../services/Authentication";
import {useNavigation} from "@react-navigation/native";
import {DarkGoBackButton} from "../components/UI/DarkGoBackButton";

export function LoginScreen() {
  const navigation = useNavigation<any>();
  const {
    control,
    handleSubmit,
    resetField,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function resetFields() {
    resetField("email", {defaultValue: ""});
    resetField("password", {defaultValue: ""});
  }

  const onSubmit = async (userData: {email: string; password: string}) => {
    try {
      logUser(userData.email, userData.password);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Unable to log in, check your credentials and try again",
      );
    }
    resetFields();
  };

  function navigationHandlerForgot() {
    navigation.navigate("ForgotPassword");
    resetFields();
  }

  function navigationHandlerGoBack() {
    navigation.goBack();
    resetFields();
  }

  return (
    <ImageBackground
      source={require("../assets/images/Background.png")}
      style={styles.background}>
      <View style={styles.container}>
        <DarkGoBackButton onPress={navigationHandlerGoBack} />

        <Text style={styles.title}>Login</Text>

        <View style={styles.formContainer}>
          <View>
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
          <View>
            <Controller
              name="password"
              control={control}
              rules={{required: true, minLength: 6}}
              render={({field: {onChange, value}, fieldState}) => (
                <InputField
                  placeholder="Password"
                  onChangeText={onChange}
                  isInvalid={fieldState.invalid}
                  value={value}
                />
              )}
            />
            {errors.password && (
              <Text style={styles.alertText}>Email or password incorrect</Text>
            )}
          </View>
        </View>

        <Pressable
          style={styles.paragraphContainer}
          onPress={navigationHandlerForgot}>
          <Text style={styles.paragraph}>
            Forgot your
            <Text style={[styles.paragraph, styles.textDetail]}> password</Text>
            ?
          </Text>
        </Pressable>

        <PrimaryButton onPress={handleSubmit(onSubmit)}>LOGIN</PrimaryButton>

        <View style={styles.bottom}>
          <Text style={styles.paragraph}>
            Or
            <Text style={[styles.paragraph, styles.textDetail]}> login </Text>
            with social account
          </Text>
          <SocialButtons />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    height: "100%",
  },

  container: {
    alignSelf: "center",
    width: "90%",
    marginTop: "6%",
  },
  title: {
    marginTop: "8%",
    color: Colors.secundaryColor,
    fontSize: 34,
    fontWeight: "bold",
  },

  textDetail: {
    color: Colors.secundaryColor,
  },

  alertText: {
    color: "red",
  },

  formContainer: {
    marginTop: "20%",
    gap: 10,
  },

  paragraphContainer: {
    alignSelf: "flex-end",
    marginBottom: "12%",
    marginTop: "6%",
  },

  paragraph: {
    textAlign: "center",
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
  },

  bottom: {
    marginTop: "40%",
  },
});
