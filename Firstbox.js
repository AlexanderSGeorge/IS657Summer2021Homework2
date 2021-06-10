import React from "react";
import { PropTypes } from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

export default function FirstBox({ children }) {
  return (
    <View style={styles.FirstBox}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}

FirstBox.propTypes = {
  children: PropTypes.node.isRequired
};
