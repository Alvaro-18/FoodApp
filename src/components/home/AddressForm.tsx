import {View, Text, StyleSheet, Alert} from "react-native";
import {useForm, Controller} from "react-hook-form";
import {InputField} from "../auth/InputField";
import {PrimaryButton} from "../UI/PrimaryButton";

export function AddressForm() {
  const {
    control,
    handleSubmit,
    resetField,
    formState: {errors},
  } = useForm({
    defaultValues: {
      zipCode: "",
      address: "",
      city: "",
      state: "",
      fullName: "",
    },
  });

  const onSubmit = async (userData: {
    zipCode: string;
    address: string;
    city: string;
    state: string;
    fullName: string;
  }) => {
    try {
      // atualizar o context
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Unable to create user, please check your informations and try again",
      );
    }
  };

  function resetFields() {
    resetField("zipCode", {defaultValue: ""});
    resetField("address", {defaultValue: ""});
    resetField("city", {defaultValue: ""});
    resetField("state", {defaultValue: ""});
    resetField("fullName", {defaultValue: ""});
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Controller
          name="zipCode"
          control={control}
          rules={{required: true, minLength: 5}}
          render={({field: {onChange, value}, fieldState}) => (
            <InputField
              placeholder="zipCode"
              onChangeText={onChange}
              isInvalid={fieldState.invalid}
              value={value}
            />
          )}
        />
        {errors.zipCode && (
          <Text style={styles.alertText}>
            Invalid information, please try again.
          </Text>
        )}

        <Controller
          name="address"
          control={control}
          rules={{required: true, minLength: 5}}
          render={({field: {onChange, value}, fieldState}) => (
            <InputField
              placeholder="address"
              onChangeText={onChange}
              isInvalid={fieldState.invalid}
              value={value}
            />
          )}
        />
        {errors.address && (
          <Text style={styles.alertText}>
            Invalid information, please try again.
          </Text>
        )}
        <Controller
          name="city"
          control={control}
          rules={{required: true, minLength: 5}}
          render={({field: {onChange, value}, fieldState}) => (
            <InputField
              placeholder="city"
              onChangeText={onChange}
              isInvalid={fieldState.invalid}
              value={value}
            />
          )}
        />
        {errors.city && (
          <Text style={styles.alertText}>
            Invalid information, please try again.
          </Text>
        )}
        <Controller
          name="state"
          control={control}
          rules={{required: true, minLength: 5}}
          render={({field: {onChange, value}, fieldState}) => (
            <InputField
              placeholder="state"
              onChangeText={onChange}
              isInvalid={fieldState.invalid}
              value={value}
            />
          )}
        />
        {errors.state && (
          <Text style={styles.alertText}>
            Invalid information, please try again.
          </Text>
        )}
        <Controller
          name="fullName"
          control={control}
          rules={{required: true, minLength: 5}}
          render={({field: {onChange, value}, fieldState}) => (
            <InputField
              placeholder="fullName"
              onChangeText={onChange}
              isInvalid={fieldState.invalid}
              value={value}
            />
          )}
        />
        {errors.fullName && (
          <Text style={styles.alertText}>
            Invalid information, please try again.
          </Text>
        )}
      </View>

      <PrimaryButton onPress={handleSubmit(onSubmit)} colorNumber={1}>
        Add new address
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "95%",
    marginTop: "15%",
  },

  form: {
    justifyContent: "space-between",
    height: 375,
    marginBottom: "20%",
  },

  alertText: {
    color: "red",
  },
});
