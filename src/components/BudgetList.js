import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const BudgetList = () => {
  const budg = useSelector((state) => state.budgets);
  console.log(budg);

  const data = [
    {
      id: 1,
      title: "Investment ",
      aa: "500",
      pa: "800",
    },
    {
      id: 2,
      title: "Shopping",
      aa: "400",
      pa: "500",
    },
  ];

  // render item function
  const renderList = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.budgetName}</Text>
        <Text style={styles.aa}>Actual Amount - {item.actualAmount}</Text>
        <Text style={styles.pa}>Planned Amount - {item.plannedAmount}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Budget Entry Listing
      </Text>
      <FlatList
        data={budg}
        renderItem={renderList}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 30 }}
      />
    </View>
  );
};

export default BudgetList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#DED0B6",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  aa: {
    fontSize: 12,
  },
  pa: {
    fontSize: 12,
  },
});
