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
});
