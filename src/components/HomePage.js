import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.wlcmtext}>Welcome to Budget App!</Text>
      <TouchableOpacity
        style={styles.startbtn}
        onPress={() => navigation.navigate("Entry")}
      >
        <Text>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  startbtn: {
    backgroundColor: "#ECB159",
    padding: 10,
    marginTop: 10,
    width: "50%",
    borderRadius: 5,
    alignItems: "center",
  },
  wlcmtext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    // marginTop: 20,
    color: "#1B1A55",
  },
});
