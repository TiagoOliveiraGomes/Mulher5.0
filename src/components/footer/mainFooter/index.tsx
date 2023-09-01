import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../../util/theme/colors";
import { IconButton } from "../../iconButton";
import { Table, WhatsappLogo } from "phosphor-react-native";
import { NavigationProp } from '@react-navigation/native'

interface MainFooterProps {
    navigation: NavigationProp<any, any>
}

export function MainFooter(props: MainFooterProps) {
    const { navigation } = props
  return (
    <View style={styles.containerButtons}>
      <IconButton text="Tabela" onPress={() => navigation.navigate("Schedule")}>
        <Table color={colors.lilac} weight="duotone" size={32} />
      </IconButton>
      <IconButton
        text="Whatsapp"
        onPress={() => navigation.setParams({screen: "table"})}
      >
        <WhatsappLogo color={colors.lilac} weight="duotone" size={32} />
      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
    containerButtons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
})