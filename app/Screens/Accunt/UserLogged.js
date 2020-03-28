import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";
import InfoUser from "../../Components/Accunt/InfoUser";
import AccountsOption from "../../Components/Accunt/AccountsOption";
import Toast from "react-native-easy-toast";
import Loading from "../../Components/Loading";

export default function UserLogged() {
  const toastRef = useRef();
  const [useinfo, setuseInfo] = useState({});
  const [Reloaddata, setReloadData] = useState(false);
  const [isVisible, setisVisible] = useState(false);
  const [isTexto, setisTexto] = useState("");

  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setuseInfo(user.providerData[0]);
    })();
    setReloadData(false);
  }, [Reloaddata]);

  return (
    <View style={styles.viewuserInfo}>
      <InfoUser
        useinfo={useinfo}
        setReloadData={setReloadData}
        setisVisible={setisVisible}
        setisTexto={setisTexto}
      />
      <AccountsOption
        useinfo={useinfo}
        setReloadData={setReloadData}
        toastRef={toastRef}
      />
      <Button
        title="Cerrar Sesion"
        onPress={() => firebase.auth().signOut()}
        buttonStyle={styles.BtnStyles}
        titleStyle={styles.Btntitle}
      />
      <Toast ref={toastRef} position="center" opacity={0.5} />
      <Loading isVisible={isVisible} Texto={isTexto} />
    </View>
  );
}
const styles = StyleSheet.create({
  viewuserInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2"
  },
  BtnStyles: {
    marginTop: 30,
    borderRadius: 0,
    backgroundColor: "#fff",
    borderEndWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
    paddingTop: 10,
    paddingBottom: 10
  },
  Btntitle: {
    color: "#AE0AF6"
  }
});
