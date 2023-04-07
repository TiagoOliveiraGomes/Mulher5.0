import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../../util/theme/colors'
import { Shadow } from 'react-native-shadow-2'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'

export const ProfileButton = ({idImg}:{idImg:number}) => {
    const imgUrl = `https://i.pravatar.cc/300?img=${idImg}`
    return (
        <TouchableOpacity>
            <View style={styles.container}>
            <Image
        style={styles.tinyLogo}
        source={{
          uri: imgUrl,
        }}
      />
            </View>
        </TouchableOpacity>
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
        alignItems: "center",
        overflow: "hidden"
    },
    tinyLogo: {
        width: 100,
        height: 100,
      },
})