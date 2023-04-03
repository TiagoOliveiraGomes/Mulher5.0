import { Image, StyleSheet, TouchableOpacity, TextInput, View } from "react-native"
import { colors } from "../../util/theme/colors"
import { Shadow } from 'react-native-shadow-2'
import { width } from "../../util/dimensions"
import { IconButton } from "../iconButton"
import { CrownSimple, MagnifyingGlass } from "phosphor-react-native"

export const Header = () => {
    const img = require('../../assets/imgs/image2.png')
    const img2 = require('../../assets/imgs/text.png')
    return (
        <View>
            <Shadow distance={4} offset={[0,4]}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={img} />
                    <Image style={styles.Title} source={img2} />
                    <IconButton text="Admin">
                        <CrownSimple color={colors.lilac} weight="duotone" size={32} />
                    </IconButton>
                </View>
            </Shadow>
            <View style={styles.inputContainer}>
                <Shadow distance={4} offset={[0,4]}>
                    <TextInput style={styles.input} placeholder="Nome da corredora..." />
                </Shadow>
                <TouchableOpacity style={styles.searchIcon}>
                    <MagnifyingGlass size={28} color={colors.lilac}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray,
        width: width,
        flexDirection: "row",
        paddingTop: 50,
        paddingHorizontal: 30,
        paddingBottom: 40,
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottomStartRadius: 33,
        shadowOpacity: 50,
        elevation: 20
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
        position: "relative",
        top:"-10%",
        alignItems: "center"
    },
    input: {
        width:300,
        height: 42,
        borderRadius: 29,
        borderWidth: 2,
        borderColor: colors.lilac,
        backgroundColor: colors.light_purple,
        paddingHorizontal: 22,
    },
    searchIcon: {
        position: "absolute",
        top: "18%",
        right: "18%"
    }
})