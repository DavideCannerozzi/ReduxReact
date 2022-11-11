import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from ".."
import { decrement, increment, reset } from "./store/counter.actions"

function Counter() {
  const dispatch = useDispatch()
  const c = useSelector((state:RootState) => state.counter )

  return (
    <div>
      <p>{ c }</p>
      <button onClick={() => dispatch(increment(10))}>Inc</button>
      <button onClick={() => dispatch(decrement(2))}>Dec</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter
