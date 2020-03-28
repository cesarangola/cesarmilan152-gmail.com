import React, { useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import { withNavigation } from "react-navigation";
import LoginForm from "../../Components/Accunt/LoginForm";
import Facebook from "../../Components/Accunt/LoginFacebook";

import Toast from "react-native-easy-toast";

export default function Login(props) {
  const { navigation } = props;
  const toastRef = useRef();
  return (
    <ScrollView>
      <Image
        source={require("../../../assets/img/iniciarsesion.png")}
        style={styles.Logo}
        resizeMode="contain"
      />
      <View style={styles.ViewContainer}>
        <LoginForm toastRef={toastRef} />
        {/* <Text>Create Acount...</Text> */}
        <CreateAccount navigation={navigation} />

        <Divider style={styles.divide} />
      </View>
      <View style={styles.ViewContainer}>
        <Facebook ref={toastRef} navigation={navigation} />
      </View>
      <Toast ref={toastRef} position="center" opacity={20} />
    </ScrollView>
  );
}

function CreateAccount(props) {
  const { navigation } = props;

  return (
    <Text style={styles.TextRegister}>
      ¿Aun no tienes una cuenta? {""}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("Register")}
      >
        Registrate
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  Logo: {
    width: "100%",
    height: 250,
    marginTop: 5,
    backgroundColor: "white"
  },
  ViewContainer: {
    marginRight: 40,
    marginLeft: 40
  },
  TextRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnRegister: {
    color: "#AE0AF6",
    fontWeight: "bold"
  },
  divide: {
    backgroundColor: "#AE0AF6",
    margin: 30
  }
});
