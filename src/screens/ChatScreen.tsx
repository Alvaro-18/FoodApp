import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Pressable,
  Image,
  SafeAreaView,
  SectionList,
} from "react-native";
import {Colors} from "../assets/constants/Colors";
import {useEffect, useState} from "react";
import {format, formatRelative} from "date-fns";
import {ptBR} from "date-fns/locale";
import groupBy from "lodash.groupby";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import { MessageStatus } from "../types/enums/MessageStatus";
import {Message} from "../types/interfaces/Message";
import {Section} from "../types/interfaces/Section";
import {MSGLIST, STORE} from "../store/Data";
import { MsgContainer } from "../components/chat/MsgContainer";
import { Store } from "../types/interfaces/Store";

export function ChatScreen({route}: {route: any}) {
  const {id} = route.params;
  const [msg, setMsg] = useState("");
  const [sections, setSections] = useState<Section[]>([]);
  const [listMsg, setListMsg] = useState(MSGLIST);
  const [store, setStore] = useState<Store>();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function navigationHandler() {
    navigation.goBack();
  }

  function FetchImage() {
    if(store){
      return (
        <Image source={{uri:store.logoURL}} style={styles.storeImage}/>
      );
    } else {
      return (
        <View style={styles.storeImage}></View>
      );
    }
  }

  function sendMsg() {
    if (msg) {
      setMsg("");
      setListMsg([
        ...listMsg,
        {
          from: 1,
          to: 2,
          id: 4544,
          message: msg,
          createdAt: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
          status: MessageStatus.SENDED,
        },
      ]);
    }
  }

  useEffect(() => {
    const groupedList = Object.values(
      groupBy(listMsg, function (dia: Message) {
        return dia.createdAt.substring(0, 10);
      }),
    );
    const data: Section[] = [];
    groupedList.map(d => {
      const section: Section = {
        title: formatRelative(d[0].createdAt, new Date(), {locale: ptBR}),
        data: [...d],
      };

      data.push(section);
    });
    
    async function fetchStore() {
      const store = STORE.find(store => store.id === id);
      if (store) {
        setStore(store);
      } 
    }
    
    fetchStore();
    setSections(data);
  }, [listMsg, id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={navigationHandler}>
          <Image
            source={require("../assets/images/Arrow-left.png")}
            style={styles.icon}
          />
        </Pressable>
        <FetchImage/>
        <Text style={styles.name}>{(store) ? store.name : "Cantinho do Sabor"}</Text>
      </View>

      <SectionList
        style={styles.list}
        sections={sections}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => MsgContainer(item)}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
      />

      <KeyboardAvoidingView>
        <View style={styles.bottom}>
          <TextInput
            placeholder="Enter a mensage..."
            placeholderTextColor={"#000"}
            multiline={true}
            style={styles.input}
            value={msg}
            onChangeText={setMsg}
          />
          <Pressable style={styles.btn} onPress={sendMsg}>
            <Image
              source={require("../assets/images/Paper-plane.png")}
              resizeMode="center"
              style={styles.btnIcon}
            />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "97%",
    alignSelf: "center",
    width: "96%",
    marginTop: 6,
    justifyContent: "space-between",
  },

  header: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 6,
    marginTop: 16,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 2,
  },

  storeImage: {
    backgroundColor: Colors.green600,
    width: 30,
    height: 30,
    borderRadius: 50,
  },

  name: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
  },

  titleContainer: {
    backgroundColor: "#EAEAEA",
    alignSelf: "center",
    marginTop: 12,
    paddingVertical: 3,
    paddingHorizontal: 12,
    marginBottom: 4,
    borderRadius: 12,
  },

  sectionTitle: {
    color: "#000",
    fontSize: 13,
    fontWeight: "500",
  },

  list: {
    marginTop: 2,
    marginBottom: 10,
  },

  bottom: {
    backgroundColor: "#D9D9D9",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    justifyContent: "space-between",
  },

  input: {
    width: "84%",
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },

  btn: {
    width: 40,
    height: 30,
    borderRadius: 10,
    backgroundColor: Colors.green600,
    alignItems: "center",
    justifyContent: "center",
  },

  btnIcon: {
    width: 20,
    height: 18,
  },

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
