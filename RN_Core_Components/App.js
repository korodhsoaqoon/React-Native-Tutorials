import { useState } from "react";
import {
  View,
  Button,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";

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
          onPress={() => alert("Button Pressed")}
        />

        <Pressable
          onPress={() => alert("Short Press")}
          onLongPress={() => alert("Long Pressed")}
          style={{
            backgroundColor: "#0077b6",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            margin: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Pressable Button</Text>
        </Pressable>

        <TouchableOpacity
          onPress={() => alert("You pressed the button.")}
          style={{
            backgroundColor: "#0077b6",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            margin: 5,
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>
            Touchable Opacity Button
          </Text>
        </TouchableOpacity>

        <Button
          title="Open Modal"
          color="0077b6"
          onPress={() => setModalVisible(true)}
        />
        <ActivityIndicator size="100" color="#0077b6" />
      </ScrollView>

      <Modal visible={modalVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "white",
              padding: 20,
              borderRadius: 15,
              alignItems: "center",
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 10,
                color: "#0077b6",
              }}
            >
              Hello From The Modal
            </Text>
            <Text>This is a styled modal content box.</Text>
            <Button
              onPress={() => setModalVisible(false)}
              color="#0077b6"
              title="Close "
            />
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}
