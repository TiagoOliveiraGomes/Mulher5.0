import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../../util/theme/colors'
import { runnerType } from '../../../mock/runners'

interface TableLineProps {
    textColor: boolean,
    isFirst: boolean,
    isLast: boolean,
    color: boolean,
    onClick?: () => void,
    item: runnerType
}
export function TableLine(props: TableLineProps) {
    const {isFirst, isLast, onClick} = props
    const color = props.color ? colors.light_purple : colors.lilac
    const textColor = props.textColor ? "black" : "white"

  return (
    <TouchableOpacity onPress={onClick} style={[
        style.TableLineContainer,
        isFirst && style.FirstTableLineContainer,
        isLast && style.LastTableLineContainer,
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
    </TouchableOpacity>
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