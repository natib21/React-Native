import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, onDelete }) => {
  return (
    <Pressable onPress={onDelete.bind(this, itemData.id)}>
      <View style={styles.textItem}>
        <Text style={styles.text}>{itemData}</Text>
      </View>
    </Pressable>
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
