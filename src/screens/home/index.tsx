import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { colors } from "../../util/theme/colors"

const Home = () => {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <TouchableOpacity style={{alignSelf:"flex-end"}}>
                    <Text style={{color:colors.lilac, fontSize: 18}}>Admin</Text>
                </TouchableOpacity>
                <TextInput style={style.input}>
                    <Text style={{opacity: 1.0}}>asdasd</Text>
                </TextInput>
            </View>
            <Text style={style.text}>Home</Text>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.lilac ,
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    header: {
        backgroundColor: '#fff',
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 60
    },
    input: {
        backgroundColor: colors.lilac,
        opacity: 0.5,
        padding: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        width: "80%",
        marginTop: 30,
    },
    text: {
        color:"black"
    }
})
export default Home