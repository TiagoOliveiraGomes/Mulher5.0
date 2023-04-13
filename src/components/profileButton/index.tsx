import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../../util/theme/colors'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { CheckProfile } from './checkProfile'

interface ProfileButtonProps {
    idImg:number, 
    name: string, 
    checked:boolean
}

export const ProfileButton = (props:ProfileButtonProps) => {
    const {idImg, name, checked} = props
    const imgUrl = `https://i.pravatar.cc/300?img=${idImg}`

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.tinyLogo} source={{uri: imgUrl,}} />
            </View>
            <Text style={styles.text}>{name}</Text>
            {checked && <CheckProfile />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "relative"
    },
    profile: {
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
      text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#232323",
        marginTop: 5
      }
})