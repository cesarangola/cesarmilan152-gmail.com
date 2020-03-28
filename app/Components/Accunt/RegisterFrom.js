import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../../utils/Validation";
import Loading from "../../Components/Loading";
import * as firebase from "firebase";
import { withNavigation } from "react-navigation";

function RegisterFrom(props) {
  const { toastRef, navigation } = props;

  const [hidePasword, sethidePasword] = useState(true);
  const [hidePasword2, sethidePasword2] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isVisible, setisVisible] = useState(false);

  const Register = async () => {
    setisVisible(true);
    if (!email || !password || !password2) {
      toastRef.current.show("Todos Los campos son obligatorios");
    } else if (!validateEmail(email)) {
      toastRef.current.show("El Email no es Valido");
    } else if (password !== password2) {
      toastRef.current.show("Debe conicidir El password");
    } else {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate("MyAccunt");
        })
        .catch(() => {
          toastRef.current.show("Error al Crear cuenta");
        });
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
            size={30}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        password={false}
        secureTextEntry={hidePasword}
        containerStyle={styles.inputForm}
        onChange={e => setPassword(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePasword ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => sethidePasword(!hidePasword)}
            size={30}
          />
        }
      />

      <Input
        placeholder=" Repetir Contraseña"
        password={false}
        secureTextEntry={hidePasword2}
        containerStyle={styles.inputForm}
        onChange={e => setPassword2(e.nativeEvent.text)}
        rightIcon={
          <Icon
            type="material-community"
            name={hidePasword2 ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconRight}
            onPress={() => sethidePasword2(!hidePasword2)}
            size={30}
          />
        }
      />
      <Button
        title="Unirse"
        containerStyle={styles.BtnContainerRegister}
        buttonStyle={styles.BtnRegister}
        onPress={Register}
      ></Button>
      <Loading text="Creando Cuenta" isVisible={isVisible} />
    </View>
  );
}
export default withNavigation(RegisterFrom);
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
