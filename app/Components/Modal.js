import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Overlay } from "react-native-elements";

const Modal = props => {
  const { isvisible, setIsvisible, children } = props;

  const closeModal = () => setIsvisible(false);

  return (
    <Overlay
      isVisible={isvisible}
      windowBackgroundColor="rgba(0,0,0, .5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overly}
      onBackdropPress={closeModal}
    >
      {children}
    </Overlay>
  );
};
const styles = StyleSheet.create({
  overly: {
    height: "auto",
    width: "90%",
    backgroundColor: "#fff"
  }
});

export default Modal;
