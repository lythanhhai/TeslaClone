import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CardCar from "./Component/CardItem/CardCar";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.carContainer}>
        <ImageBackground
          source={require("./assets/images/ModelX.jpeg")}
          style={styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subTitle}>Starting at $$69,420</Text>
        </View>
      </View> */}
      <CardCar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
