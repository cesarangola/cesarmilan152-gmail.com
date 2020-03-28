import { createStackNavigator } from "react-navigation-stack";
import SearchScreens from "../Screens/Search";

const SearchStacks = createStackNavigator({
  Search: {
    screen: SearchScreens,
    navigationOptions: () => ({
      title: "Buscar"
    })
  }
});

export default SearchStacks;
