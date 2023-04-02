import { StyleSheet, Text, View } from "react-native"
import { colors } from "../../util/theme/colors"
import { Shadow } from 'react-native-shadow-2'
import { width } from "../../util/dimensions"

export const Header = () => {
    return (
        <Shadow>
            <View style={styles.container}>
                <Text>Ola</Text>
                <Text>Ola</Text>
                <Text>Ola</Text>
            </View>
        </Shadow>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray,
        width: width,
        flexDirection: "row",
        paddingTop: 60,
        paddingHorizontal: 30,
        paddingBottom: 40,
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderBottomStartRadius: 33,
        shadowOpacity: 50,
        elevation: 20
    }
})