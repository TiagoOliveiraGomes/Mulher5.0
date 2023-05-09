import { FlatList, StyleSheet } from "react-native"
import { width } from "../../util/dimensions"
import { ProfileButton } from "../profileButton"
import { dataMock } from "../../mock/runners"

interface ScrollProfileProps {
  runnerNameInput: string
}

export const ScrollProfile = (props: ScrollProfileProps) => {
  const {runnerNameInput} = props
  const dataMockFiltered = dataMock.filter(runner => runner.name.toLowerCase().includes(runnerNameInput.toLowerCase()))

    return(
        <FlatList
        columnWrapperStyle={{justifyContent:"space-evenly", alignItems:"flex-start"}}
        contentContainerStyle={{gap:30, paddingVertical:"10%"}}
        style={styles.container}
        data={dataMockFiltered}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => {
            return (
              <ProfileButton checked={item.checked} name={item.name} idImg={+item.id} />
            );
          }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        zIndex: -1,
    },
    item: {
        alignItems: "center",
        backgroundColor: "#dcda48",
        flexGrow: 1,
        margin: 4,
        padding: 20
      },
      text: {
        color: "#333333"
      }
})