import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
} from "react-native";

import { AppLoading } from "expo";
import { LoginScreen } from "./Screens/LoginScreen";
import { Registration, RegistrationScreen } from "./Screens/RegistrationScreen";

// import * as Font from "expo-font";
// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regulat": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//   });
// };

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isReady, setIsReady] = useState(false);

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name}: ${password}`);
  };

  // if (!isReady) {
  //   return (
  //     <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  //   );
  // }

  return (
    <View>
      <RegistrationScreen></RegistrationScreen>
      <LoginScreen></LoginScreen>
    </View>
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //   <View style={styles.container}>
    //     <KeyboardAvoidingView
    //       behavior={Platform.OS == "ios" ? "padding" : "height"}
    //     >
    //       <TextInput
    //         value={name}
    //         onChangeText={nameHandler}
    //         placeholder="Username"
    //         style={styles.input}
    //       />
    //       <TextInput
    //         value={password}
    //         onChangeText={passwordHandler}
    //         placeholder="Password"
    //         secureTextEntry={true}
    //         style={styles.input}
    //       />
    //       <Button title={"Login"} style={styles.input} onPress={onLogin} />
    //     </KeyboardAvoidingView>
    //   </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "#000000",
      },
      android: {
        backgroundColor: "#ffffff",
      },
    }),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
