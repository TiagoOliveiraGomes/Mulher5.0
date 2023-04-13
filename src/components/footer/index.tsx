import { Image, StyleSheet, TouchableOpacity, TextInput, View, Text } from "react-native"
import { colors } from "../../util/theme/colors"
import { Shadow } from 'react-native-shadow-2'
import { height, width } from "../../util/dimensions"
import { IconButton } from "../iconButton"
import { CrownSimple, MagnifyingGlass, Table, WhatsappLogo } from "phosphor-react-native"

export const Footer = () => {
    const img = require('../../assets/imgs/image2.png')
    const img2 = require('../../assets/imgs/text.png')
    return (
            <Shadow distance={4} offset={[0,4]}>
                <View style={styles.container}>
                    <View style={styles.containerButtons}>
                        <IconButton text="Tabela">
                            <Table color={colors.lilac} weight="duotone" size={32} />
                        </IconButton>
                        <IconButton text="Whatsapp">
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
        backgroundColor: colors.gray,
        width: width,
        height: height/7,
        paddingHorizontal: "20%",
        paddingTop: 22,
        paddingBottom: 10,
        borderTopRightRadius: 33,
        shadowOpacity: 50,
        zIndex:1,
        justifyContent: "space-between"
        // gap: 20,
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