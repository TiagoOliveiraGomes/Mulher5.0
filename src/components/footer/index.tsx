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
                        <IconButton text="Admin">
                            <Table color={colors.lilac} weight="duotone" size={32} />
                        </IconButton>
                        <IconButton text="Tabela">
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
        height: height/6,
        paddingHorizontal: "20%",
        paddingTop: 40,
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
    logo: {
        width: 62,
        height: 40,
    },
    Title: {
        width: 121,
        height: 24,
    },
    inputContainer: {
        width: width,
        position: "absolute",
        top:"210%",
        alignItems: "center",
        zIndex:1,
    },
    input: {
        width:300,
        height: 42,
        borderRadius: 29,
        borderWidth: 2,
        borderColor: colors.lilac,
        backgroundColor: colors.light_purple,
        paddingHorizontal: 22,
        zIndex:1,
    },
    searchIcon: {
        position: "absolute",
        top: "18%",
        right: "18%"
    },
    text: {
        fontSize: 12,
        color: "#909090",
        fontWeight: "bold",
    }
})