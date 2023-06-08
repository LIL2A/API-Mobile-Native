import api from "./src/services/Api";
import { Home } from "./src/screens/SplashScreen/home";
import Index from "./src/screens/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Index" component={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
