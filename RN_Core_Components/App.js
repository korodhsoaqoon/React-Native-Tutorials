import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
export default function App() {
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

        <Text style={{ fontSize: 25 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nulla,
          amet aperiam non quasi magnam provident, autem, excepturi fugiat sequi
          beatae iste sunt asperiores nesciunt doloremque recusandae nam
          architecto obcaecati omnis eius voluptatem voluptatum vitae. Itaque
          culpa in, pariatur fugiat reiciendis adipisci laudantium
          necessitatibus similique provident quidem quod placeat quaerat
          corrupti dicta nostrum quisquam eius neque ratione, qui voluptates,
          cum totam inventore veniam rerum! Quam aliquid nemo quis ex accusamus
          consectetur dicta repellendus eveniet temporibus recusandae laudantium
          animi est, molestiae architecto iste ducimus exercitationem officiis
          nesciunt doloribus cupiditate inventore possimus totam? Aperiam magni
          illo soluta. Ex sed consequatur voluptas maxime.
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}
