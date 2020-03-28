import { createStackNavigator } from "react-navigation-stack";
import MyAccuntScreens from "../Screens/Accunt/MyAccunt";
import LoginScreens from "../Screens/Accunt/Login";
import Registercreens from "../Screens/Accunt/Register";

const MyAccuntStacks = createStackNavigator({
  MyAccunt: {
    screen: MyAccuntScreens,
    navigationOptions: () => ({
      title: "Mi cuenta"
    })
  },
  Login: {
    screen: LoginScreens,
    navigationOptions: () => ({
      title: "Login"
    })
  },
  Register: {
    screen: Registercreens,
    navigationOptions: () => ({
      title: "Registro"
    })
  }
});

export default MyAccuntStacks;
