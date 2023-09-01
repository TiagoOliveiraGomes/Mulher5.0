import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

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
      <View>
        <View style={styles.ContainerNumberSpace}>
          <TextInput onPressIn={()=> 0} keyboardType='numeric' value={yesterday} onChangeText={handleChangeYesterdayText} style={styles.NumberSpace} />
          <TextInput editable={false} style={styles.NumberSpace}>{allDays}</TextInput>
        </View>
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
    borderRightWidth:0
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
  }
})
