import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { width } from '../../util/dimensions'

export function RunnersTable() {
  return (
    <View style={style.Container}>
      <Text>index</Text>
    </View>
  )
}

const style = StyleSheet.create({
    Container: {
        width: width,
        flexGrow: 1,
        alignItems: "center",
        padding: 20
    }
})