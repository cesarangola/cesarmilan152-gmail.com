import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

export default function InfoUser(props) {
  const {
    useinfo: { uid, displayName, email, photoURL },
    setReloadData,
    toastRef,
    setisVisible,
    setisTexto
  } = props;

  const changeAvatar = async () => {
    const resultPermision = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const resultPermisionCamera = resultPermision.permissions.cameraRoll.status;

    if (resultPermisionCamera === "denied") {
      toastRef.current.swow("es necesario aceptar los permisos de la galeria");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });
      if (result.cancelled) {
        toastRef.current.swow("Has cerrado la galeria sin subir una imagen");
      } else {
        uploadImage(result.uri, uid).then(() => {
          updatePhotourl(uid);
          console.log("imagen subida correctamente");
        });
      }
    }
  };
  //importatnte para subier a firebase
  const uploadImage = async (uri, nameImage) => {
    setisTexto("Cambiando Imagen");
    setisVisible(true);
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase
      .storage()
      .ref()
      .child(`Avatar/${nameImage}`);
    return ref.put(blob);
  };
  const updatePhotourl = uid => {
    firebase
      .storage()
      .ref(`Avatar/${uid}`)
      .getDownloadURL()
      .then(async result => {
        const update = { photoURL: result };
        await firebase.auth().currentUser.updateProfile(update);
        setReloadData(true);
        setisVisible(false);
      })
      .catch(() => {
        toastRef.current.swow("Error al Recuperara el avatar");
      });
  };

  return (
    <View style={styles.viewuserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        onEditPress={changeAvatar}
        containerStyle={styles.userInfoAvatar}
        source={{
          uri: photoURL
            ? photoURL
            : "https://api.adorable.io/avatars/204/abott@adorable.png"
        }}
      />
      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : "Anonimo"}
        </Text>
        <Text>{email ? email : "Social Media"}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewuserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30
  },
  userInfoAvatar: {
    marginRight: 20
  },
  displayName: {
    fontWeight: "bold"
  }
});
