import { MagnifyingGlass } from "phosphor-react-native";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { width } from "../../util/dimensions";
import { colors } from "../../util/theme/colors";

export function SearchBar({ runnerNameInput, setRunnerNameInput }) {
  return (
    <View style={styles.inputContainer}>
      <Shadow distance={4} offset={[0, 4]}>
        <TextInput
          value={runnerNameInput}
          onChangeText={setRunnerNameInput}
          style={styles.input}
          placeholder="Nome da corredora..."
        />
      </Shadow>
      <TouchableOpacity style={styles.searchIcon}>
        <MagnifyingGlass size={28} color={colors.lilac} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: width,
    position: "absolute",
    top: "210%",
    alignItems: "center",
    zIndex: 1,
  },
  input: {
    width: 300,
    height: 42,
    borderRadius: 29,
    borderWidth: 2,
    borderColor: colors.lilac,
    backgroundColor: colors.light_purple,
    paddingHorizontal: 22,
    zIndex: 1,
  },
  searchIcon: {
    position: "absolute",
    top: "18%",
    right: "18%",
  },
});
