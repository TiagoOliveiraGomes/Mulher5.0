import { FlatList, Text, StyleSheet, View } from "react-native"
import { width } from "../../util/dimensions"
import { useState } from "react"

type dataType = {id:string, name: string}[]


export const ScrollProfile = () => {
    const [data, setData] = useState<dataType>([
        { id: "00", name: "Relâmpago McQueen" },
        { id: "01", name: "Agente Tom Mate" },
        { id: "02", name: "Doc Hudson" },
        { id: "03", name: "Cruz Ramirez" }]
    )
    return(
        <FlatList 
        data={data}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text} >{item.name}</Text>
              </View>
            );
          }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        zIndex: -1
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