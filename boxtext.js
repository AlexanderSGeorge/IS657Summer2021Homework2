import React from "react";
import { PropTypes } from "prop-types";
import { View, Text } from "react-native";
import styles from "./styles";

export default function boxtext({ children }) {
  return (
    <View style={styles.boxtext}>
      <Text style={styles.boxtextText}>{children}</Text>
    </View>
  );
}

boxtext.propTypes = {
  children: PropTypes.node.isRequired
};
