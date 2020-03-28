import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import RestaurantStacks from "./RestaurantStacks";
import TopListStacks from "./TopListStacks";
import MyAccuntStacks from "./MyAccuntStacks";
import SearchStacks from "./SearchStacks";

const navigationStacks = createBottomTabNavigator(
  {
    Restaurants: {
      screen: RestaurantStacks,
      navigationOptions: () => ({
        tabBarLabel: "Inicio",
        tabBarIcon: ({ tintcolor }) => (
          <Icon
            type="material-community"
            name="compass-outline"
            size={30}
            color={tintcolor}
          />
        )
      })
    },
    Top: {
      screen: TopListStacks,
      navigationOptions: () => ({
        tabBarLabel: "Rating",
        tabBarIcon: ({ tintcolor }) => (
          <Icon
            type="material-community"
            name="star-outline"
            size={30}
            color={tintcolor}
          />
        )
      })
    },

    Search: {
      screen: SearchStacks,
      navigationOptions: () => ({
        tabBarLabel: "Buscar",
        tabBarIcon: ({ tintcolor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={30}
            color={tintcolor}
          />
        )
      })
    },
    MyAccunt: {
      screen: MyAccuntStacks,
      navigationOptions: () => ({
        tabBarLabel: "Login",
        tabBarIcon: ({ tintcolor }) => (
          <Icon
            type="material-community"
            name="home-outline"
            size={30}
            color={tintcolor}
          />
        )
      })
    }
  },
  {
    // donde queremos que inice
    initialRouteName: "MyAccunt",
    order: ["Restaurants", "Top", "Search", "MyAccunt"],
    //colores acti e inactive
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);

export default createAppContainer(navigationStacks);
