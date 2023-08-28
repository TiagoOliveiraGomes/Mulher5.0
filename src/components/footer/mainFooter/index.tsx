import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../../util/theme/colors";
import { IconButton } from "../../iconButton";
import { Table, WhatsappLogo } from "phosphor-react-native";
import { FooterProps } from "..";

export function MainFooter(props: FooterProps) {
    const { navigation } = props
  return (
    <View style={styles.containerButtons}>
      <IconButton text="Tabela" onPress={() => navigation.navigate("Schedule")}>
        <Table color={colors.lilac} weight="duotone" size={32} />
      </IconButton>
      <IconButton
        text="Whatsapp"
        onPress={() => navigation.navigate("Schedule")}
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