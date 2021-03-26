import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native";
export default function CreateAccount({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      <View style={styles.top}>
        <Text style={styles.check}>Brand</Text>
        <Text style={styles.brand}>
          "You are the best brand. Make it outstanding"
        </Text>
      </View>
      <View style={styles.box}>
        <View style={styles.names}>
          <TextInput style={styles.firstName} placeholder="First Name" />
          <TextInput style={styles.firstName} placeholder="Last Name" />
        </View>
        <TextInput style={styles.email} placeholder="Email ID" />
        <TextInput style={styles.email} placeholder="Password" />
        <TouchableOpacity style={styles.touch}>
          <Text style={styles.create}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.sign}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.login}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    paddingTop: 50,
  },
  top: {
    marginTop: 40,
  },
  check: {
    marginLeft: 20,
    fontSize: 50,
    color: "white",
    marginTop: 35,
    fontWeight: "bold",
  },
  brand: {
    marginLeft: 20,
    fontSize: 20,
    color: "white",
    marginTop: 30,
    fontWeight: "bold",
  },
  box: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 30,
  },
  names: {
    paddingTop: 20,

    flexDirection: "row",
    justifyContent: "space-between",
  },
  firstName: {
    width: "48%",
    height: 70,
    backgroundColor: "wheat",
    fontSize: 23,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  email: {
    width: "100%",
    height: 70,
    backgroundColor: "wheat",
    fontSize: 23,
    fontWeight: "bold",
    paddingLeft: 10,
    marginTop: 20,
  },
  touch: {
    width: "100%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "red",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  create: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  login: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 20,
  },
});
