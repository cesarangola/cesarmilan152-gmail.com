import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SocialIcon } from "react-native-elements";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";
import { FacebookApi } from "../../utils/Social";
import Loading from "../../Components/Loading";

export default function LoginFacebook(props) {
  const { toastRef, navigation } = props;
  const [isVisible, setisVisible] = useState(false);

  const login = async () => {
    await Facebook.initializeAsync(FacebookApi.application_id);
    const {
      type,
      token
    } = await Facebook.logInWithReadPermissionsAsync(
      FacebookApi.application_id,
      { permissions: FacebookApi.permissions }
    );

    if (type === "success") {
      setisVisible(true);
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);
      await firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          navigation.navigate("MyAccunt");
        })
        .catch(() => {
          console.log("Error accediendo con Facebook, inténtelo de nuevo");
        });
    } else if (type === "cancel") {
      toastRef.current.show("Inicio de sesión cancelado");
    } else {
      toastRef.current.show("Error desconocido, inténtelo más tarde");
    }
    setisVisible(false);
  };
  return (
    <>
      <SocialIcon
        title="Iniciar sesion con Facebook"
        button
        type="facebook"
        onPress={login}
      />
      <Loading text="Iniciado Sesion" isVisible={isVisible} />
    </>
  );
}
