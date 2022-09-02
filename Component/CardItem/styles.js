import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 10,
    color: "#5c5e62",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default styles;