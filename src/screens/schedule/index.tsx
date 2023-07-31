import { View, Text } from 'react-native'
import React from 'react'
import { IconButton } from '../../components/iconButton'
import { Table } from 'phosphor-react-native'
import { colors } from '../../util/theme/colors'

const Schedule = ({navigation}) => {
  return (
    <View style={{alignItems:"center"}}>
      <Text>Schedule</Text>
      <IconButton text='asd' onPress={()=> navigation.goBack()}>
        <Table color={colors.lilac} weight="duotone" size={32} />
      </IconButton>
    </View>
  )
}

export {Schedule}