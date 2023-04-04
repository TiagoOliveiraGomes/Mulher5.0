import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../../util/theme/colors'
import { Shadow } from 'react-native-shadow-2'

export const ProfileButton = () => {
    return (
            <View style={styles.container}>
                <Text>Testando</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth:2,
        borderColor: colors.heavy_purple,
        justifyContent: "center",
        alignItems: "center"
    }
})