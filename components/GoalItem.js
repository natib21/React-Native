import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({ itemData }) => {
  return (
    <View style={styles.textItem}>
      <Text style={styles.text}>{itemData}</Text>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  textItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
