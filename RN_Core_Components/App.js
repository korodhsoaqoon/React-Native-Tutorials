import { View, Text } from "react-native";
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
    </View>
  );
}
