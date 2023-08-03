import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export function TableLine(props) {
  return (
    <View style={style.TableLineContainer}>
        <View>
            <Text>{props.item.id}</Text>
        </View>
        <View>
            <Text>{props.item.name}</Text>
        </View>
        <View>
            <Text>{props.item.distanceByDay[0]}</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    TableLineContainer: {
        flexDirection: "row",
        backgroundColor: "green"
    }
})