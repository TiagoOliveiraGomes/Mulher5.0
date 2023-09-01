import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { CaretCircleDoubleRight} from 'phosphor-react-native'

export function TableDistanceByDay() {
  const [yesterday, setYesterday] = useState<string>("0")
  const [today, setToday] = useState<string>("0")
  const [allDays, setAllDays] = useState<string>("0")

  const handleChangeYesterdayText = (newText: string) => {
    setYesterday(newText);
  }
  const handleChangeTodayText = (newText: string) => {
    setToday(newText);
  }
  
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Distancia percorrida</Text>
      <View style={styles.ContainerTableHelper}>
        <Text>Hoje</Text>
        <Text>Total</Text>
      </View>
      <View style={{flexDirection: "row", width: "100%", justifyContent: "center"}}>
        <View style={{flexDirection:"row", justifyContent: "center"}}>
          <View style={styles.ContainerNumberSpace}>
            <TextInput onPressIn={()=> 0} keyboardType='numeric' value={yesterday} onChangeText={handleChangeYesterdayText} style={styles.NumberSpace} />
            <TextInput editable={false} style={styles.NumberSpace}>{allDays}</TextInput>
          </View>
        </View>
          <TouchableOpacity style={styles.SendButton}>
            <CaretCircleDoubleRight size={30}/>
            <Text>Enviar</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "green"
  },
  Title: {
    fontWeight: "bold",
    fontSize: 16
  },
  ContainerNumberSpace: {
    flexDirection: "row",
    borderWidth: 2,
    borderRightWidth:0,
  },
  NumberSpace: {
    width: 50,
    borderRightWidth: 2,
    padding:3,
    textAlign: "center"
  },
  ContainerTableHelper: {
    flexDirection: "row",
    gap: 20
  },
  SendButton: {
    alignItems: "center",
    alignSelf: "flex-end",
    marginLeft: 40,
    position: "absolute",
    right: 0
  }
})
