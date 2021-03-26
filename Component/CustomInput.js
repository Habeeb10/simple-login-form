import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export const CustomInput = ({
  placeHolder,
  style,
  type,
  onChange,
  secure,
  value,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        keyboardType={type} 
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor="white"
        onChangeText={onChange}
        secureTextEntry={secure}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  input: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: "orange",
    padding: 10,
    marginTop: 40,
    color: "white",
  },
});
