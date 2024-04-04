// Use Redux State and Actions in React Components
// Now we can use the React-Redux hooks to let React components interact with the Redux store. 
// We can read data from the store with useSelector, and dispatch actions using useDispatch. 
// Create a src/features/counter/Counter.js file with a <Counter> component inside, then import 
// that component into App.js and render it inside of <App>.

import React from 'react'
import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/slices/accountSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.account.balance)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}