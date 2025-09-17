import { useState } from "react";
import {
  View,
  Button,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import CustomButton from "./components/CustomButton";
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={{
        flex: 1,
        backgroundColor: "#f0f4f8",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <StatusBar style="dark" />
      <ScrollView
        style={{
          padding: 10,
        }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
        // horizontal
      >
        <TouchableOpacity onPress={() => alert("You pressed the logo!.")}>
          <Image
            source={require("./assets/react-native.png")}
            style={{ width: 150, height: 150 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#0077b6",
          }}
        >
          👋 Hello, React Native!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#333",
            textAlign: "center",
          }}
        >
          This is your very first mobile app using Expo 🚀
        </Text>

        <Button
          title="Click Me"
          color="#0077b6"
          onPress={() =>
            Alert.alert("Info", "Welcome To React Native Alert!", [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Ok",
                onPress: () => console.log("You Pressed The Ok Button"),
              },
            ])
          }
        />

        <CustomButton
          title="Login"
          onPress={() => alert("You pressed the Login Button")}
        />
        <CustomButton
          title="Register"
          onPress={() => alert("You pressed the Register Button")}
        />
        <CustomButton
          title="Reset Password"
          onPress={() => alert("You pressed the Reset Password Button")}
        />
      </ScrollView>
    </ImageBackground>
  );
}
