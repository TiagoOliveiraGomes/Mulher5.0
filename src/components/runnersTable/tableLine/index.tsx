import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { width } from '../../../util/dimensions'
import { colors } from '../../../util/theme/colors'

export function TableLine(props) {
    const color = props.item.id % 2 === 0 ? colors.light_purple : colors.lilac
    const textColor = props.item.id % 2 === 0 ? "black" : "white"
  return (
    <View style={[style.TableLineContainer, {backgroundColor: color}]}>
        <View style={{flexGrow:1, borderRightWidth:2, paddingHorizontal:15}}>
            <Text style={{color: textColor}}>{props.item.id}</Text>
        </View>
        <View style={{flexGrow:4, borderRightWidth:2, paddingHorizontal:15}}>
            <Text style={{color: textColor}}>{props.item.name}</Text>
        </View>
        <View style={{flexGrow:2, paddingHorizontal:15}}>
            <Text style={{color: textColor}}>{props.item.distanceByDay[0]}</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    TableLineContainer: {
        width: "100%",
        height: 30,
        flexDirection: "row",
        // backgroundColor: "blue",
        borderWidth: 2,
        borderBottomWidth: 1,
        justifyContent:"center",
        alignItems: "center",
    },
})