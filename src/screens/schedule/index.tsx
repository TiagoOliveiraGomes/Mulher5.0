import { StyleSheet, View, Text } from "react-native"
import { colors } from "../../util/theme/colors"
import { Header } from "../../components/header"
import { ScrollProfile } from "../../components/scrollProfiles"
import { Footer } from "../../components/footer"
import { useState } from "react"

const Schedule = (props) => {
    const navigation = props.navigation
    console.log(props)
    const [runnerNameInput, setRunnerNameInput] = useState<string>("")

    return (
        <View style={style.container}>
            <Header runnerNameInput={runnerNameInput} setRunnerNameInput={setRunnerNameInput} IsMainScreen={false} />
            <View>
              <Text>Testando</Text>
            </View>
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
export {Schedule}