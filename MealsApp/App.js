import { StatusBar } from "expo-status-bar";
import CategoryScreens from "./screens/CategoryScreens";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoryScreens />
    </>
  );
}

const styles = StyleSheet.create({});
