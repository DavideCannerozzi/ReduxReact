import { decrement, increment, reset } from "./counter.actions"
import { createReducer, PayloadAction } from "@reduxjs/toolkit"





export const counter = createReducer(0, {
    [increment.type]: (state:number,action:PayloadAction<number>) => state + action.payload,
    [decrement.type]: (state:number,action:PayloadAction<number>) => state - action.payload,
    [reset.type]: () => 0
})





/* 
export function counter(state = 10 ,action:any){
    console.log('reducer')
    switch(action.type){
        case increment.type:
            return state + action.payload
        case decrement.type:
            return state - action.payload
        case reset.type:
            return state = 0
        default:
            return state

    }
}  */