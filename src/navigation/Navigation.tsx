import React from "react";
import { Provider } from "react-redux";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Redux store
import { store } from "@src/store/store";

//Constants
import { SCREENS } from "@src/utils/constants";

//Screens
import { MainScreen, DetailsScreen } from "@src/screens";

type RootStackParamList = {
  MainScreen: undefined;
  DetailsScreen: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
        // screenOptions={{
        //   headerShown: false,
        // }}
        >
          <Stack.Screen
            options={{
              title: "Star Wars",
            }}
            name={SCREENS.MAIN_SCREEN}
            component={MainScreen}
          />
          <Stack.Screen
            options={{
              title: "",
              headerBackTitle: "Back",
            }}
            name={SCREENS.DETAILS_SCREEN}
            component={DetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
