import { FlatList, StyleSheet } from "react-native"
import { width } from "../../util/dimensions"
import { ProfileButton } from "../profileButton"

// type runnerType = {id:string, name: string, checked:boolean}
const dataMock = [
  { id: "00", name: "Relâmpago", checked: true },
  { id: "01", name: "Agente Tom", checked: false },
  { id: "02", name: "Doc Hudson", checked: false },
  { id: "03", name: "Cruz Ramirez", checked: false },
  { id: "04", name: "Cruz Ramirez", checked: false },
  { id: "05", name: "Cruz Ramirez", checked: false },
  { id: "06", name: "Cruz Ramirez", checked: true },
  { id: "07", name: "Cruz Ramirez", checked: false },
  { id: "08", name: "Cruz Ramirez", checked: false },
  { id: "09", name: "Cruz Ramirez", checked: false },
  { id: "10", name: "Cruz Ramirez", checked: false },
  { id: "11", name: "Cruz Ramirez", checked: true },
  { id: "12", name: "Cruz Ramirez", checked: false },
  { id: "13", name: "Cruz Ramirez", checked: false },
  { id: "14", name: "Cruz Ramirez", checked: false },
  { id: "15", name: "Cruz Ramirez", checked: false },
  { id: "16", name: "Cruz Ramirez", checked: false },
  { id: "17", name: "Cruz Ramirez", checked: false },
  { id: "18", name: "Cruz Ramirez", checked: false },
  { id: "19", name: "Cruz Ramirez", checked: false },
  { id: "20", name: "Cruz Ramirez", checked: true },
]

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