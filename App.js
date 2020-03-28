import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./app/navigations/Navigation";
import { firebaseApp } from "./app/utils/FireBase";

export default function App() {
  return <Navigator />;
}
