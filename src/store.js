import {configureStore, createSlice} from "@reduxjs/toolkit";


const toDos = createSlice({
    name: 'toDoReducer',
    initialState: [],
    reducers:{
        add:(state, action) => {
            state.push({text: action.payload, id: Date.now()})
        },
        remove:(state, action) => state.filter(todo => todo.id !== action.payload)
    }
})


const store = configureStore({reducer: toDos.reducer});

 export const { add, remove } = toDos.actions

export default store;
