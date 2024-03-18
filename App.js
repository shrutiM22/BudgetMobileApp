import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import BudgetEntry from "./src/components/BudgetEntry";
import BudgetList from "./src/components/BudgetList";

import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/components/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  const RootApp = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="List" component={BudgetList} />
          <Stack.Screen name="Entry" component={BudgetEntry} />
        </Stack.Navigator>
      </NavigationContainer>
      // <SafeAreaView>
      //   <BudgetEntry />
      //   <BudgetList />
      // </SafeAreaView>
    );
  };

  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}
