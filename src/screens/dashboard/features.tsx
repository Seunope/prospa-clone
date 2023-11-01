import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONT, SHADOWS, SIZES, icons } from "../../config/utils";

export default () => {
  const [textState, setTextState] = useState();
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.textContainer} activeOpacity={0.4}>
          <Text style={styles.textList}>Accounts</Text>
        </TouchableOpacity>
        <Text style={styles.textList2}>Cards</Text>
        <Text style={styles.textList2}>Saving</Text>
        <Text style={styles.textList2}>Loans</Text>
        <Text style={styles.textList2}>Accounts</Text>
        <Text style={styles.textList2}>Accounts</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },

  textList: {
    // padding: 40,
    fontFamily: FONT.regular,
    paddingLeft: 0,
  },

  textList2: {
    marginVertical: 40,
    marginHorizontal: 20,
    paddingTop: 5,
    fontFamily: FONT.regular,
    paddingLeft: 0,
  },

  textContainer: {
    marginVertical: 40,
    marginHorizontal: 20,
    marginLeft: 5,
    padding: 15,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    ...SHADOWS.medium,
  },
});
