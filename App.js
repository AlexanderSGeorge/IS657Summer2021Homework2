import React from 'react';
import { StyleSheet, StatusBar, Text, View } from 'react-native';

import styles from "./styles";
import Box from "./Box";
import MainBox from "./MainBox";
import FirstBox from "./Firstbox";
import SecondBox from "./SecondBox";
import Row from "./Row";
import Column from "./Column";

export default function App() {
  return (
    <View style={styles.container}>
      <MainBox>
        <FirstBox>
          <Column>
            <Box>Child</Box>
            <Box>Child</Box>
            <Box>Child</Box>
          </Column>
        </FirstBox>
        <SecondBox>
          <Row>
            <Box>Child</Box>
            <Box>Child</Box>
            <Box>Child</Box>
          </Row>
        </SecondBox>
      </MainBox>
    </View>
  );
}
