import { StyleSheet, View, Text } from "react-native"
import { colors } from "../../util/theme/colors"
import { Shadow } from 'react-native-shadow-2'
import { height, width } from "../../util/dimensions"
import { IconButton } from "../iconButton"
import { Table, WhatsappLogo } from "phosphor-react-native"
import { NavigationProp } from '@react-navigation/native'

interface FooterProps {
    navigation: NavigationProp<any, any>
}

export const Footer = (props:FooterProps) => {
    const navigation = props.navigation

    return (
            <Shadow distance={4} offset={[0,4]}>
                <View style={styles.container}>
                    <View style={styles.containerButtons}>
                        <IconButton text="Tabela" onPress={()=>navigation.navigate('Schedule')}>
                            <Table color={colors.lilac} weight="duotone" size={32} />
                        </IconButton>
                        <IconButton text="Whatsapp" onPress={() => navigation.navigate('Schedule')}>
                            <WhatsappLogo color={colors.lilac} weight="duotone" size={32} />
                        </IconButton>
                    </View>
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
        height: height/7,
        paddingHorizontal: "20%",
        paddingTop: 22,
        paddingBottom: 10,
        borderTopRightRadius: 33,
        shadowOpacity: 50,
        zIndex:100,
        justifyContent: "space-between",
    },
    containerButtons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 12,
        color: "#909090",
        fontWeight: "bold",
    }
})