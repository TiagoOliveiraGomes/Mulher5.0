import { StyleSheet, View, Text } from "react-native"
import { colors } from "../../util/theme/colors"
import { Shadow } from 'react-native-shadow-2'
import { height, width } from "../../util/dimensions"
import { IconButton } from "../iconButton"
import { Table, WhatsappLogo } from "phosphor-react-native"
import { NavigationProp } from '@react-navigation/native'
import { MainFooter } from "./mainFooter"
import { TableDistanceByDay } from "./tableDistanceByDay"

interface FooterProps {
    navigation: NavigationProp<any, any>,
    type: string
}

export const Footer = (props:FooterProps) => {
    const {navigation, type } = props

    return (
            <Shadow distance={4} offset={[0,4]}>
                <View style={styles.container}>
                    {type === "main" ? <MainFooter navigation={navigation} /> : <TableDistanceByDay />}
                    <Text style={styles.text}>By Tiago de Oliveira Gomes</Text>
                </View>
            </Shadow>
    )
}

const styles = StyleSheet.create({
    container: {
        position:"absolute", left: -width/2, bottom: 0,
        backgroundColor: colors.gray,
        width: width,
        height: height/7 + 10,
        paddingHorizontal: "20%",
        paddingTop: 22,
        paddingBottom: 10,
        borderTopRightRadius: 33,
        shadowOpacity: 50,
        zIndex:100,
        justifyContent: "space-between",
        alignItems: "center"
    },
    
    text: {
        fontSize: 12,
        color: "#909090",
        fontWeight: "bold",
    }
})