import { StyleSheet, View } from "react-native"
import { colors } from "../../util/theme/colors"
import { Header } from "../../components/header"
import { ScrollProfile } from "../../components/scrollProfiles"
import { Footer } from "../../components/footer"
import { useState } from "react"

const Home = (props) => {
    const navigation = props.navigation
    const [runnerNameInput, setRunnerNameInput] = useState<string>("")

    return (
        <View style={style.container}>
            <Header navigation={navigation} IsMainScreen={true} runnerNameInput={runnerNameInput} setRunnerNameInput={setRunnerNameInput} />
            <ScrollProfile runnerNameInput={runnerNameInput} />
            <Footer navigation={navigation} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.lilac ,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    text: {
        color:"black"
    }
})
export {Home}