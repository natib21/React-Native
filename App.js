import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  const goalInputHandler = (e) => {
    setEnteredGoalText(e);
  };
  const addGoalHandler = () => {
    setCourseGoals((current) => [
      ...current,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    endAddGoalHandler();
  };

  const Delete = (id) => {
    setCourseGoals((current) => {
      return current.filter((goal) => goal.id !== id);
    });
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#210644"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            goalInputHandler={goalInputHandler}
            enteredGoalText={enteredGoalText}
            addGoalHandler={addGoalHandler}
            visible={modalIsVisible}
            closeModal={endAddGoalHandler}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={Delete}
                />
              );
            }}
            alwaysBounceHorizontal={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});
