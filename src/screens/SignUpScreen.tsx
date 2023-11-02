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
import {InputField} from "../components/InputField";
import {PrimaryButton} from "../components/PrimaryButton";
import {SocialButtons} from "../components/SocialButtons";

export function SignUpScreen({navigation}: {navigation: any}) {
  const {
    control,
    handleSubmit,
    resetField,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = async (userData: {
    name: string;
    password: string;
    email: string;
  }) => {
    try {
      // precisa fazer a função de criar usúario
      navigation.navigate("LoginScreen");
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Unable to create user, please check your informations and try again",
      );
    }
    resetField("name", {defaultValue: ""});
    resetField("email", {defaultValue: ""});
    resetField("password", {defaultValue: ""});
  };

  function navigationHandler() {
    navigation.navigate("Login");
  }

  return (
    <ImageBackground
      source={require("../assets/images/Background.png")}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={[styles.title, styles.textDetail]}>
          Sign
          <Text style={styles.title}> up</Text>
        </Text>

        <View style={styles.formContainer}>
          <View>
            <Controller
              name="name"
              control={control}
              rules={{required: true, minLength: 3}}
              render={({field: {onChange, value}, fieldState}) => (
                <InputField
                  placeholder="Name"
                  onChangeText={onChange}
                  isInvalid={fieldState.invalid}
                  value={value}
                />
              )}
            />
            {errors.name && (
              <Text style={styles.alertText}>This name is required.</Text>
            )}
          </View>

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
              <Text style={styles.alertText}>Invalid password</Text>
            )}
          </View>
        </View>

        <Pressable
          style={styles.paragraphContainer}
          onPress={navigationHandler}>
          <Text style={styles.paragraph}>
            Already have an
            <Text style={[styles.paragraph, styles.textDetail]}> account</Text>?
          </Text>
        </Pressable>

        <PrimaryButton onPress={handleSubmit(onSubmit)}>SIGN UP</PrimaryButton>

        <View style={styles.bottom}>
          <Text style={styles.paragraph}>
            Or
            <Text style={[styles.paragraph, styles.textDetail]}> sign up </Text>
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
    marginTop: "12%",
  },
  title: {
    marginTop: "6%",
    color: "#000",
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
    marginTop: "24%",
  },
});
