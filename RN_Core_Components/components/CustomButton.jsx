import { TouchableOpacity, Text } from "react-native";
export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#0077b6",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ color: "#fff", fontSize: 18 }}>{title}</Text>
    </TouchableOpacity>
  );
}
