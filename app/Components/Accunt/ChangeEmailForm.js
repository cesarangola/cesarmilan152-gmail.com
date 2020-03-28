import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { reauthenticate } from "../../utils/Api";

const ChangeEmailForm = props => {
  const { email, setIsvisible, setReloadData, toastRef } = props;
  const [newemail, setNewemail] = useState("");
  const [password, setNewPassword] = useState("");

  const [error, seterror] = useState({});
  const [isLoadin, setisLoadin] = useState(false);
  const [hidePassword, sethidePassword] = useState(true);

  console.log(props);
  const updateemail = () => {
    seterror({});

    if (!newemail || email === newemail) {
      seterror({ email: "El imal no puede ser igual o estar vacio" });
    } else {
      setisLoadin(true);
      reauthenticate(password)
        .then(() => {
          firebase
            .auth()
            .updateCurrentUser.updateemail(newemail)
            .then(() => {
              setisLoadin(false);
              setReloadData(true);
              console.log("email actualizo correct");
              setIsvisible(false);
            })
            .catch(() => {
              seterror({ email: "al actualizar el email" });
              setIsvisible(false);
            });
        })
        .catch(() => {
          seterror({ password: "la contraseña  no es correcta" });
          setisLoadin(false);
        });
    }
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Email"
        containerStyle={styles.input}
        onChange={e => setNewemail(e.nativeEvent.text)}
        //abajo si existe colocame displanae si no dejalo vacio
        defaultValue={email && email}
        rightIcon={{
          type: "material-community",
          name: "at",
          color: "#c2c2c2"
        }}
        errorMessage={error.email}
      />
      <Input
        placeholder="Contraseña"
        password={true}
        secureTextEntry={hidePassword}
        onChange={e => setNewPassword(e.nativeEvent.text)}
        rightIcon={{
          type: "material-community",
          name: hidePassword ? "eye-outline" : "oye-off-outline",
          color: "#c2c2c2",
          onPress: () => sethidePassword(!password)
        }}
        errorMessage={error.password}
      />
      <Button
        title="Cambiar Email"
        containerStyle={styles.btncontainer}
        buttonStyle={styles.Btnstyle}
        onPress={updateemail}
        loading={isLoadin}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10
  },
  input: {
    marginBottom: 10
  },
  btncontainer: {
    marginTop: 20,
    width: "100%"
  },
  Btnstyle: {
    backgroundColor: "#AE0AF6"
  }
});

export default ChangeEmailForm;
