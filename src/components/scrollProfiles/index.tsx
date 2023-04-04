import { FlatList, Text, StyleSheet, View } from "react-native"
import { width } from "../../util/dimensions"
import { useState } from "react"
import { ProfileButton } from "../profileButton"

type dataType = {id:string, name: string}[]


export const ScrollProfile = () => {
    const [data, setData] = useState<dataType>([
        { id: "00", name: "Relâmpago McQueen" },
        { id: "01", name: "Agente Tom Mate" },
        { id: "02", name: "Doc Hudson" },
        { id: "03", name: "Cruz Ramirez" },
        { id: "04", name: "Cruz Ramirez" },
        { id: "05", name: "Cruz Ramirez" },
        { id: "06", name: "Cruz Ramirez" },
        { id: "07", name: "Cruz Ramirez" },
        { id: "08", name: "Cruz Ramirez" },
        { id: "09", name: "Cruz Ramirez" },
        { id: "10", name: "Cruz Ramirez" },
        { id: "11", name: "Cruz Ramirez" },
        { id: "12", name: "Cruz Ramirez" },
        { id: "13", name: "Cruz Ramirez" },
        { id: "14", name: "Cruz Ramirez" },
        { id: "15", name: "Cruz Ramirez" },
    ]
    )
    return(
        <FlatList
        columnWrapperStyle={{justifyContent:"space-evenly", alignItems:"flex-start"}}
        contentContainerStyle={{gap:30, paddingVertical:"10%"}}
        style={styles.container}
        data={data}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => {
            return (
              <ProfileButton />
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