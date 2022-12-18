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
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const handleLogin = (e) => setLogin(e);
  const handleEmail = (e) => setEmail(e);
  const handlePassword = (e) => setPassword(e);
  const addImage = () => {};

  const onLogin = () => {
    Alert.alert("ok");
    // Alert.alert("Credentials", `${name} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ImageBackground
          source={require("../images/background.jpg")}
          resizeMode="cover"
        >
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              {/* upload img */}
              <View>
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                  />
                )}
                <View>
                  <TouchableOpacity onPress={addImage}>
                    <Text>{image ? "Edit" : "Upload"} Image</Text>
                    <AntDesign name="camera" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

              <h1>Registration</h1>
              <TextInput
                placeholder="Login"
                value={login}
                onChangeText={handleLogin}
              />
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
                title={"Registrated"}
                style={styles.input}
                onPress={onLogin}
              />
              {/* link  */}
              <p>Do you alredy have an account? Log in</p>
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
