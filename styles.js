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
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "darkslategray",
    backgroundColor: "lightgray"
  },

  boxText: {
    justifyContent: "center",
    alignItems: "center",
    color: "darkslategray",
    borderWidth: 1,
    borderStyle: "solid",
    fontWeight: "bold"
  },

  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end| left ",
    justifyContent: "space-around",
    alignSelf: "stretch"
  },

  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start| left",
    justifyContent: "space-around",
    alignSelf: "stretch"
  }
});
