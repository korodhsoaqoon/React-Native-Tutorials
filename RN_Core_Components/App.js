import { View, Text, Image } from "react-native";
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f0f4f8",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Image
        source={require("./assets/react-native.png")}
        style={{ width: 150, height: 150 }}
      />
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

      <Image
        source={{
          uri: "https://www.evolutionithub.com/wp-content/uploads/2024/04/react-native-apps-development-1024x952.png",
        }}
        width={320}
        height={320}
      />
    </View>
  );
}
