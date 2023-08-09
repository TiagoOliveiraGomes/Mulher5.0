import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import { width } from "../../util/dimensions";
import { dataMock } from "../../mock/runners";
import { TableLine } from "./tableLine";

export function RunnersTable() {
  return (
    <View style={style.Container}>
      <FlatList 
      style={{width:"100%"}}
      data={dataMock}
      renderItem={({ item, index }) => (
        <TableLine
            color={+item.id % 2 === 0}
            item={item}
            isFirst={index === 0}
            isLast={index === dataMock.length - 1}
            textColor={+item.id % 2 === 0}
        />
    )}
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
    marginBottom:150
  },
});
