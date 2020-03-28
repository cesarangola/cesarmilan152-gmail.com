import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import Modal from "../Modal";
import ChangeDisplayNameForm from "./ChangeDisplayNameForm";
import ChangeEmailForm from "./ChangeEmailForm";
import ChangePassForm from "./ChangePassForm ";

const AccountsOption = props => {
  const { useinfo, setReloadData, toastRef } = props;
  console.log(props);

  const [isvisible, setIsvisible] = useState(true);
  const [redercomponets, setRedercomponets] = useState(null);
  const menuoption = [
    {
      title: "Cambiar Nombre Y apellido",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconcolorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconcolorRight: "#ccc",
      onPress: () => selectedComponet("displayName")
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconcolorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconcolorRight: "#ccc",
      onPress: () => selectedComponet("Email")
    },
    {
      title: "Cambiar Contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconcolorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconcolorRight: "#ccc",
      onPress: () => selectedComponet("pass")
    }
  ];

  const selectedComponet = key => {
    // setIsvisible(true);
    switch (key) {
      case "displayName":
        setRedercomponets(
          <ChangeDisplayNameForm
            displayName={useinfo.displayName}
            setIsvisible={setIsvisible}
            setReloadData={setReloadData}
            toastRef={toastRef}
          />
        );
        setIsvisible(true);
        break;
      case "Email":
        setRedercomponets(
          <ChangeEmailForm
            email={useinfo.email}
            setIsvisible={setIsvisible}
            setReloadData={setReloadData}
            toastRef={toastRef}
          />
        );
        setIsvisible(true);
        break;
      case "pass":
        setRedercomponets(<ChangePassForm />);
        setIsvisible(true);
        break;
    }
  };

  return (
    <View>
      {menuoption.map((menu, index) => (
        <ListItem
          key={index}
          title={menu.title}
          leftIcon={{
            type: menu.iconType,
            name: menu.iconNameLeft,
            color: menu.iconcolorLeft
          }}
          rightIcon={{
            type: menu.iconType,
            name: menu.iconNameRight,
            color: menu.iconcolorRight
          }}
          onPress={menu.onPress}
          containerStyle={styles.menuItem}
        />
      ))}
      {redercomponets && (
        <Modal isvisible={isvisible} setIsvisible={setIsvisible}>
          {redercomponets}
        </Modal>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3"
  }
});

export default AccountsOption;
