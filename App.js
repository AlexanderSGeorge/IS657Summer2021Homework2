import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

import styles from "./styles";
import Box from "./Box";
import BoxText from "./boxtext";
import Row from "./Row";
import Column from "./Column";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      
        <Column>
        <BoxText>Column</BoxText>
          <Box>Child</Box>
          <Box>Child</Box>
          <Box>Child</Box>
        </Column>
        <Row>
        <BoxText>Row</BoxText>
          <Box>Child</Box>
          <Box>Child</Box>
          <Box>Child</Box>
        </Row>
    
    </View>
  );
}
