import { StyleSheet, View } from "react-native"
import { colors } from "../../util/theme/colors"
import { Header } from "../../components/header"
import { useState } from "react"
import { RunnersTable } from "../../components/runnersTable"
import { NavigationProp } from "@react-navigation/native"
import { Footer } from "../../components/footer"
import { height } from "../../util/dimensions"

interface ScheduleProps {
    navigation: NavigationProp<any, any>
}

const Schedule = (props: ScheduleProps) => {
    const navigation = props.navigation
    const [runnerNameInput, setRunnerNameInput] = useState<string>("")

    return (
        <View style={style.container}>
            <Header navigation={navigation} runnerNameInput={runnerNameInput} setRunnerNameInput={setRunnerNameInput} IsMainScreen={false} />
            <RunnersTable />
            <Footer type="schedule" navigation={navigation} />
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