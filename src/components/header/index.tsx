import { Image, StyleSheet, TouchableOpacity, TextInput, View } from "react-native"
import { colors } from "../../util/theme/colors"
import { Shadow } from 'react-native-shadow-2'
import { height, width } from "../../util/dimensions"
import { IconButton } from "../iconButton"
import { CrownSimple } from "phosphor-react-native"
import { useState } from "react"
import { SearchBar } from "../searchBar"
import { GoBackButton } from "../gobackButton"
import { NavigationProp } from "@react-navigation/native"

interface HeaderProps {
    runnerNameInput: string,
    setRunnerNameInput: React.Dispatch<React.SetStateAction<string>>,
    IsMainScreen: boolean,
    navigation: NavigationProp<any, any>
}
export const Header = (props:HeaderProps) => {
    const {runnerNameInput, setRunnerNameInput, IsMainScreen, navigation} = props
    const img = require('../../assets/imgs/image2.png')
    const img2 = require('../../assets/imgs/text.png')
    
    return (
            <Shadow distance={4} offset={[0,4]}>
                <View style={styles.container}>
                    {IsMainScreen?<Image style={styles.logo} source={img} />: <GoBackButton navigation={navigation} />}
                    <Image style={styles.Title} source={img2} />
                    <IconButton text="Admin">
                        <CrownSimple color={colors.lilac} weight="duotone" size={32} />
                    </IconButton>
                    {IsMainScreen? <SearchBar runnerNameInput={runnerNameInput} setRunnerNameInput={setRunnerNameInput} />: null}
                </View>
            </Shadow>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        right: -width/2,
        backgroundColor: colors.gray,
        width: width,
        height: height/6,
        flexDirection: "row",
        paddingTop: 50,
        paddingHorizontal: 30,
        paddingBottom: 40,
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottomStartRadius: 33,
        shadowOpacity: 50,
        zIndex:1,
    },
    logo: {
        width: 62,
        height: 40,
    },
    Title: {
        width: 121,
        height: 24,
    },
    
    
    
})