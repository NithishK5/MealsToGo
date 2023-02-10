import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantScreen } from "../../features/screens/restaurantScreens";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen} />
    </RestaurantStack.Navigator>
  );
};
