import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../util/theme/colors"
import { Header } from "../../components/header"
import { ScrollProfile } from "../../components/scrollProfiles"
import { Footer } from "../../components/footer"
import { useState } from "react"

const Home = () => {
    const [runnerNameInput, setRunnerNameInput] = useState<string>("")

    return (
        <View style={style.container}>
            <Header runnerNameInput={runnerNameInput} setRunnerNameInput={setRunnerNameInput} />
            <ScrollProfile runnerNameInput={runnerNameInput} />
            <Footer />
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
export default Home