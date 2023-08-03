import { TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowBendDownLeft } from 'phosphor-react-native'

export function GoBackButton({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowBendDownLeft size={32} />
    </TouchableOpacity>
  )
}