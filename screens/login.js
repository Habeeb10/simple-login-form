import "react-native-gesture-handler";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { CustomInput } from "../Component/CustomInput";
import { StatusBar } from "expo-status-bar";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.signin}>Sign In</Text>
      <Text style={styles.welcome}>
        Welcome, we are happy that you are back.
      </Text>
      <CustomInput placeHolder="Email ID" />
      <CustomInput placeHolder="Password" secure />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.sign}
        onPress={() => navigation.navigate("signup")}
      >
        <Text style={styles.button}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  signin: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
    marginLeft: 15,
    marginBottom: 20,
  },
  welcome: {
    color: "white",
    fontWeight: "normal",
    fontSize: 15,
    marginLeft: 5,
  },
  sign: {
    backgroundColor: "orange",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    height: 40,
    width: "70%",
    alignSelf: "center",
  },
  button: {
    color: "white",
    fontWeight: "bold",
  },
});
