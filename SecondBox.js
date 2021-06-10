import React from "react";
import { PropTypes } from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

export default function SecondBox({ children }) {
  return (
    <View style={styles.SecondBox}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}

SecondBox.propTypes = {
  children: PropTypes.node.isRequired
};
