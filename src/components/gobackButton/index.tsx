import { TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowBendDownLeft } from 'phosphor-react-native'
import { colors } from '../../util/theme/colors'

export function GoBackButton({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowBendDownLeft color={colors.lilac} size={32} />
    </TouchableOpacity>
  )
}