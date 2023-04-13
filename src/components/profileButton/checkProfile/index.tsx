import { View, StyleSheet } from 'react-native'
import { colors } from '../../../util/theme/colors'
import { Check } from 'phosphor-react-native'

export const CheckProfile = () => {
    return (
        <View style={styles.container}>
            <Check color='#fff' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#63A966",
        right: 0,
        width: 30,
        height: 30,
        borderRadius: 15,
        position: "absolute",
        borderColor: colors.heavy_purple,
        borderWidth:2
    }
})