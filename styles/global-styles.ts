import { StyleSheet } from "react-native";

import { Colors } from "@/constants/theme";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  mainResult: {
    fontSize: 60,
    color: Colors.textPrimary,
    textAlign: 'right',
    fontWeight: '400',
  },
  subResult: {
    fontSize: 30,
    color: Colors.textSecondary,
    textAlign: 'right',
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 100,
    backgroundColor: Colors.darkGray
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.textPrimary,
    fontSize: 30,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
    padding: 10,
  }
});
