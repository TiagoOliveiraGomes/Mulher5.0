import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../util/theme/colors"
import { Header } from "../../components/header"
import { ScrollProfile } from "../../components/scrollProfiles"
import { Footer } from "../../components/footer"

const Home = () => {
    return (
        <View style={style.container}>
            <Header />
            <ScrollProfile />
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