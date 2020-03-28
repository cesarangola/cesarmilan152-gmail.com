import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { withNavigation } from "react-navigation";

function UserGuest(props) {
  const { navigation } = props;
  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require("../../../assets/img/logokarla.jpeg")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Consulta Tu Perfil de Consultorios</Text>
      {/* <Text style={styles.description}>Consulta Tu Perfil de Consultorios</Text> */}
      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyles}
          containerStyle={styles.btnContainer}
          title="Ver tu Perfil"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ScrollView>
  );
}
export default withNavigation(UserGuest);

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center"
  },
  viewBtn: {
    flex: 1,
    alignItems: "center"
  },
  btnStyles: {
    backgroundColor: "#AE0AF6"
  },
  btnContainer: {
    width: "70%"
  }
  // description: {
  //   textAlign: "center",
  //   marginBottom: 20,

  // }
});
