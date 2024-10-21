import {View, Text, StyleSheet, Alert, Modal, Pressable} from "react-native";
import {useForm, Controller} from "react-hook-form";
import {InputField} from "../auth/InputField";
import {PrimaryButton} from "../UI/PrimaryButton";
import {Colors} from "../../assets/constants/Colors";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../../store/AppContext";
import {X, CircleCheck, CircleX} from "lucide-react-native";

interface ModalProps {
  type: "success" | "error" | "warning";
  message: string;

}

export function AddressForm() {
  const context = useContext(AppContext);
  const [isVisible, setVisible] = useState(false);
  const [modalProps, setModalProps] = useState<ModalProps>({
    message: "teste",
    type: "success",
  });

  function closeModal() {
    setVisible(false);
  }
  function openModal() {
    setVisible(true);
  }

  function GenericModal({message, type}: ModalProps) {
    return (
      <Modal visible={isVisible} transparent={true} onRequestClose={closeModal}>
        <Pressable style={styles.modalContainer} onPress={closeModal}>
          <View
            style={[
              styles.modalBackground,
              type == "success"
                ? {borderColor: Colors.green600}
                : {borderColor: Colors.red200},
            ]}>
            <X
              size={32}
              color={Colors.red600}
              style={{alignSelf: "flex-end"}}
            />

            <Text style={styles.textModal}>{message}</Text>

            {type == "success" ? (
              <CircleCheck
                size={80}
                color={Colors.green600}
                style={{marginTop: 12}}
              />
            ) : (
              <CircleX
                size={80}
                color={Colors.red200}
                style={{marginTop: 12}}
              />
            )}
          </View>
        </Pressable>
      </Modal>
    );
  }

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
    watch,
  } = useForm({
    defaultValues: {
      zipCode: "",
      address: "",
      city: "",
      state: "",
      name: "",
      complement: "",
    },
  });

  function generateUniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

  const onSubmit = async (userData: {
    zipCode: string;
    address: string;
    city: string;
    state: string;
    name: string;
    complement: string;
  }) => {
    try {
      const id = generateUniqueId();
      context.addAddress({
        ...userData, id: id
      });
      control._reset();
      setModalProps({
        message: "Sucesso ao cadastrar endereço",
        type: "success",
      });
      openModal();
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Unable to create user, please check your informations and try again",
      );
      setModalProps({message: "Erro ao cadastrar endereço", type: "error"});
      openModal();
    }
  };
  const zipCode = watch("zipCode");

  const fetchAddressData = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        Alert.alert("Erro", "CEP não encontrado.");
        setValue("address", "");
        setValue("city", "");
        setValue("state", "");
        return;
      }

      setValue("address", data.logradouro || "");
      setValue("city", data.localidade || "");
      setValue("state", data.uf || "");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar o endereço.");
      setValue("address", "");
      setValue("city", "");
      setValue("state", "");
    }
  };

  useEffect(() => {
    if (zipCode.length === 8) {
      fetchAddressData(zipCode);
    }
  }, [zipCode]);

  return (
    <View style={styles.container}>
      <GenericModal message={modalProps.message} type={modalProps.type} />

      <View style={styles.form}>
        <Controller
          name="zipCode"
          control={control}
          rules={{required: true, minLength: 8, maxLength: 8}}
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
            Invalid information, please try again. ex: 12345678
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
          rules={{required: true, maxLength: 2}}
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
          name="name"
          control={control}
          rules={{required: true, minLength: 3, maxLength: 12}}
          render={({field: {onChange, value}, fieldState}) => (
            <InputField
              placeholder="Address name"
              onChangeText={onChange}
              isInvalid={fieldState.invalid}
              value={value}
            />
          )}
        />
        {errors.name && (
          <Text style={styles.alertText}>
            Invalid information, please try again.
          </Text>
        )}
        <Controller
          name="complement"
          control={control}
          rules={{ minLength: 5}}
          render={({field: {onChange, value}, fieldState}) => (
            <InputField
              placeholder="complement"
              onChangeText={onChange}
              isInvalid={fieldState.invalid}
              value={value}
            />
          )}
        />
        {errors.complement && (
          <Text style={styles.alertText}>
            Invalid information, please try again.
          </Text>
        )}
      </View>

      <PrimaryButton onPress={handleSubmit(onSubmit)} color={Colors.green600}>
        Add new address
      </PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "96%",
    marginTop: 24,
    height: "92%",
    justifyContent: "space-between",
  },

  form: {
    height: 502,
    justifyContent: "space-between",
  },

  alertText: {
    color: "red",
    marginVertical: "2%",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backfaceVisibility: "hidden",
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
