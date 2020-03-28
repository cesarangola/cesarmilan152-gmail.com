import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import RestaurantesScreens from "../Screens/Restaurant";

const RestaurantStacks = createStackNavigator({
  Restaurants: {
    screen: RestaurantesScreens,
    navigationOptions: () => ({
      title: "Inicio"
    })
  }
});

export default RestaurantStacks;
