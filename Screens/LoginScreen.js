import {
  Image,
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
import React, { useState } from "react";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  handleEmail = (e) => setEmail(e);
  handlePassword = (e) => setPassword(e);

    const onLogin = () => {
      Alert.alert('ok')
    // Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ImageBackground source={require("../images/background.jpg")} resizeMode="cover">
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <h1>Login</h1>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={handleEmail}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={handlePassword}
              />
              <Button
                title={"Log in"}
                style={styles.input}
                onPress={onLogin}
              />
              <p>Don't have an account? Registration</p>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
