import { createSlice, nanoid } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
  name: "budgets",
  initialState: [],
  reducers: {
    addBudget: (state, action) => {
      const { budgetName, actualAmount, plannedAmount } = action.payload;
      const newBudget = {
        id: nanoid(),
        budgetName: budgetName,
        actualAmount: actualAmount,
        plannedAmount: plannedAmount,
      };
      state.push(newBudget);
    },
  },
});

export const { addBudget } = budgetSlice.actions;

export default budgetSlice.reducer;
