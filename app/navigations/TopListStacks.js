import { createStackNavigator } from "react-navigation-stack";
import TopScreens from "../Screens/TopRestaurant";

const TopListStacks = createStackNavigator({
  Top: {
    screen: TopScreens,
    navigationOptions: () => ({
      title: "Top"
    })
  }
});

export default TopListStacks;
