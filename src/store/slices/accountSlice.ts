//* Create a Redux State Slice
//* Add a new file named src/features/counter/counterSlice.js. In that file, import the createSlice API from Redux Toolkit.
//* Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions
//* to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the
//* reducer function for the whole slice.
//* Redux requires that we write all state updates immutably, by making copies of data and updating the copies. However,
//* Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes
//* correct immutable updates.

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AccountState {
  balance: number;
  loan: number;
  loanPurpose: string;
  isActive: boolean;
}

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isActive: false,
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    openAccount: (state) => {
      if (state.isActive) return;
      state.balance = 100;
      state.loan = 0;
      state.isActive = true;
    },
    closeAccount: (state) => {},
    withdraw: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
    },
    deposit: (state, action: PayloadAction<number>) => {
      state.balance += action.payload;
    },
    requestLoan: (state, action: PayloadAction<{ amount: number; purpose: string }>) => {
      if (state.loan > 0) return;
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance += action.payload.amount;
    },
    payLoan: (state, action: PayloadAction<number>) => {
      state.balance -= action.payload;
      state.loan = 0;
      state.loanPurpose = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { openAccount, closeAccount, withdraw, deposit, requestLoan, payLoan } =
  accountSlice.actions;

export default accountSlice.reducer;
