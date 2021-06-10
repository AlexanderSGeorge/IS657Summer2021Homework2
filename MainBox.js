import React from "react";
import { PropTypes } from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

export default function MainBox({ children }) {
  return (
    <View style={styles.MainBox}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}

MainBox.propTypes = {
  children: PropTypes.node.isRequired
};
