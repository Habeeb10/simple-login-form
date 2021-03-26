import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login";
import CreateAccount from "./screens/createAccount";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={CreateAccount} />
    </Stack.Navigator>
  );
}
