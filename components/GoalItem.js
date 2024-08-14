import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, onDelete }) => {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDelete.bind(this, itemData.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View style={styles.textItem}>
          <Text style={styles.text}>{itemData}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  textItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
