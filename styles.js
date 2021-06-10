//import React from 'react';
import { StyleSheet, Platform, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight }
    })
  },
  box: {
    height: 80,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: 5,
    borderStyle: "solid",
    borderColor: "darkslategray",
    backgroundColor: "lightgray"
  },
  boxText: {
    fontSize: 20,
    color: "darkslategray",
    fontWeight: "bold"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 5
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 5
  },
  firstbox: {
    flex:2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    backgroundColor: "lightgray",
    margin: 20, 
    padding: 5
  },
  secondbox: {
    flex:1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    backgroundColor: "lightgray",
    margin: 20, 
    padding: 5
  },
  mainbox: {
    flex:1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    backgroundColor: "lightgray",
    margin: 20, 
    padding: 5
  },
});
