import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../util/theme/colors'
import { height } from '../../../util/dimensions'

export function TableLine(props) {
    const color = props.item.id % 2 === 0 ? colors.light_purple : colors.lilac
    const textColor = props.item.id % 2 === 0 ? "black" : "white"
  return (
    <View style={[
        style.TableLineContainer,
        props.isFirst && style.FirstTableLineContainer,
        props.isLast && style.LastTableLineContainer,
        { backgroundColor: color }
    ]}>
        <View style={[{ width:"15%", borderRightWidth:2, }, style.collumnTable]}>
            <Text style={{color: textColor, fontWeight: "bold"}}>{props.item.id}</Text>
        </View>
        <View style={[{ width:"65%", borderRightWidth:2,}, style.collumnTable]}>
            <Text style={{color: textColor, fontWeight: "bold"}}>{props.item.name}</Text>
        </View>
        <View style={[{ width:"20%", height:"100%",}, style.collumnTable]}>
            <Text style={{color: textColor, fontWeight: "bold"}}>{props.item.distanceByDay[0]}</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    TableLineContainer: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth:1,
        alignItems: "center",
        margin: 0,
        paddingVertical: 0
    },
    FirstTableLineContainer: {
        borderTopWidth: 2,
        borderBottomWidth: 1,
    },
    LastTableLineContainer: {
        borderBottomWidth: 2,
    },
    collumnTable: {
        height: "100%", 
        padding:0, 
        justifyContent:"center",
        paddingHorizontal:15,
    }
});