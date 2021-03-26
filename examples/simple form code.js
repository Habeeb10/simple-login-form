import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, Touchable, View } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.check}> X Checkout</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.pass}>Passenger Information</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Phone number" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.butt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
  },
  top: {
    flexDirection: "row",
    marginTop: 50,
  },
  check: {
    marginLeft: 20,
    fontSize: 25,
    color: "white",
    marginTop: 35,
    fontWeight: "bold",
  },
  box: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
  pass: {
    marginTop: 15,
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    width: "90%",
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 50,
    borderColor: "purple",
    fontSize: 17,
    paddingLeft: 10,
  },
  next: {
    backgroundColor: "purple",
    color: "white",
  },
  button: {
    height: 50,
    backgroundColor: "purple",
    marginHorizontal: 20,
    marginTop: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  butt: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});
