import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBudget } from "../redux/budgetSlice";

const BudgetEntry = ({ navigation }) => {
  const dispatch = useDispatch();

  const onSave = () => {
    const plannedAmountNum = parseFloat(plannedAmount);
    const actualAmountNum = parseFloat(actualAmount);

    if (budgetName.trim().length === 0) {
      Alert.alert("please add a budget");
      setBudgetName("");
      return;
    }
    if (isNaN(actualAmountNum)) {
      Alert.alert("please add actual amount");
      setActualAmount("");
      return;
    }
    if (isNaN(plannedAmountNum)) {
      Alert.alert("please add planned amount");
      setPlannedAmount("");
      return;
    }
    dispatch(
      addBudget({
        budgetName: budgetName,
        plannedAmount: plannedAmountNum,
        actualAmount: actualAmountNum,
      })
    );
    setBudgetName("");
    setActualAmount("");
    setPlannedAmount("");
  };

  const [budgetName, setBudgetName] = useState("");
  const [plannedAmount, setPlannedAmount] = useState("");
  const [actualAmount, setActualAmount] = useState("");
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Budget Entry
      </Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TextInput
          style={styles.budgetInput}
          placeholder="Name"
          onChangeText={setBudgetName}
          value={budgetName}
        />
        <TextInput
          style={styles.budgetInput}
          placeholder="Planned Amount"
          onChangeText={setPlannedAmount}
          value={plannedAmount}
        />
        <TextInput
          style={styles.budgetInput}
          placeholder="Actual Amount"
          onChangeText={setActualAmount}
          value={actualAmount}
        />
        <TouchableOpacity style={styles.savebtn} onPress={onSave}>
          <Text style={{ color: "white" }}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.showbtn}
          onPress={() => navigation.navigate("List")}
        >
          <Text style={{ color: "white" }}>Show Items</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BudgetEntry;

const styles = StyleSheet.create({
  budgetInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: "80%",
    borderRadius: 5,
  },
  showbtn: {
    backgroundColor: "#B2A59B",
    padding: 10,
    margin: 10,
    width: "50%",
    borderRadius: 5,
    alignItems: "center",
  },
  savebtn: {
    backgroundColor: "green",
    padding: 10,
    margin: 10,
    width: "50%",
    borderRadius: 5,
    alignItems: "center",
  },
});
