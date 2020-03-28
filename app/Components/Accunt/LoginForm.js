import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validation";
import Loading from "../../Components/Loading";
import * as firebase from "firebase";
import { withNavigation } from "react-navigation";

function LoginForm(props) {
  const { toastRef, navigation } = props;

  const [hidePasword, sethidePasword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setisVisible] = useState(false);

  const Register = async () => {
    setisVisible(true);
    if (!email || !password) {
      toastRef.current.show("Todos Los campos son obligatorios");
    } else {
      if (!validateEmail(email)) {
        toastRef.current.show("El Email no es Valido");
      } else {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            navigation.navigate("MyAccunt");

            console.log("Login correcto");
          })
          .catch(() => {
            toastRef.current.show("Email o contraseña Incorrecta");
          });
      }
    }
    setisVisible(false);
  };

  return (
    <View style={styles.FormContaine}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
        onChange={e => setEmail(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
            size={38}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={hidePasword}
        onChange={e => setPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePasword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            size={38}
            onPress={() => sethidePasword(!hidePasword)}
          />
        }
      />
      <Button
        title="Iniciar Sesion"
        containerStyle={styles.BtnContainerRegister}
        buttonStyle={styles.BtnRegister}
        onPress={Register}
      ></Button>
      <Loading text="Iniciado Sesion" isVisible={isVisible} />
    </View>
  );
}

export default withNavigation(LoginForm);

const styles = StyleSheet.create({
  FormContaine: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  inputForm: {
    width: "100%",
    marginTop: 20
  },
  iconRight: {
    color: "#c1c1c1"
  },
  BtnContainerRegister: {
    marginTop: 20,
    width: "70%"
  },
  BtnRegister: {
    backgroundColor: "#AE0AF6"
  }
});
