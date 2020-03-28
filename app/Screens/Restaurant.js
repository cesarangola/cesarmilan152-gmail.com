import React from "react";
import { Tooltip, Text } from "react-native-elements";

const Restaurant = () => {
  return (
    <Tooltip popover={<Text>Proximanete</Text>}>
      <Text>Inicio</Text>
    </Tooltip>
  );
};

export default Restaurant;
