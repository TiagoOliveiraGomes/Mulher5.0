import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import { width } from "../../util/dimensions";
import { dataMock } from "../../mock/runners";
import { TableLine } from "./tableLine";

export function RunnersTable() {
  return (
    <View style={style.Container}>
      <FlatList 
      data={dataMock}
      renderItem={TableLine}
      keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    width: width,
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
});
