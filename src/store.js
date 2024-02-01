import {createStore} from "redux";
import {createAction} from "@reduxjs/toolkit";


const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type:
            return [{text: action.payload, id: Date.now()}, ...state]
        case deleteToDo.type:
            return state.filter(todo => todo.id !== action.payload)
        default:
            return []
    }
}

const store = createStore(reducer);

 export const actionCreators = {
     addToDo,
     deleteToDo
 }

export default store;
