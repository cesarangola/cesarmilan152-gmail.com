import React, { useRef } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import RegisterFrom from "../../Components/Accunt/RegisterFrom";
import Toast from "react-native-easy-toast";

export default function Register() {
  const toastRef = useRef();
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/register2.jpg")}
        style={styles.Logo}
        resizeMode="contain"
      />
      <View style={styles.ViewForm}>
        <RegisterFrom toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.5} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  Logo: {
    width: "100%",
    height: 180,
    marginTop: 5
  },
  ViewForm: {
    marginRight: 40,
    marginLeft: 40
  }
});
