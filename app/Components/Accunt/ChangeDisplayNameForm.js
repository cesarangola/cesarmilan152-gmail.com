import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import * as firebase from "firebase";
import Toast from "react-native-easy-toast";

const ChangeDisplayNameForm = props => {
  const { displayName, setIsvisible, setReloadData, toastRef } = props;
  const [newdisplayName, setNewdisplayName] = useState(null);
  const [error, seterror] = useState(null);
  const [isLoadin, setisLoadin] = useState(false);

  console.log(props);
  const updateDisplayName = () => {
    seterror(null);
    if (!newdisplayName) {
      seterror("El Nombre del usuario no ha cambiado");
    } else {
      setisLoadin(true);
      const update = {
        displayName: newdisplayName
      };
      firebase
        .auth()
        .currentUser.updateProfile(update)
        .then(() => {
          setisLoadin(false);
          setReloadData(true);
          // toastRef.current.swow("Nombre Actualizado correctamente");
          setIsvisible(false);
        })
        .catch(() => {
          seterror("Error al Actualizar nombre");
          setisLoadin(false);
        });
    }
  };

  return (
    <View style={styles.view}>
      <Input
        placeholder="Nombre"
        containerStyle={styles.input}
        onChange={e => setNewdisplayName(e.nativeEvent.text)}
        //abajo si existe colocame displanae si no dejalo vacio
        defaultValue={displayName && displayName}
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",

          color: "#c2c2c2"
        }}
        errorMessage={error}
      />
      <Button
        title="Cambiar Nombre"
        containerStyle={styles.btncontainer}
        buttonStyle={styles.Btnstyle}
        onPress={updateDisplayName}
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
export default ChangeDisplayNameForm;
