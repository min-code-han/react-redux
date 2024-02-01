import React, {useState} from 'react';
import {connect} from "react-redux";
import {add} from "../store";
import ToDo from "../components/ToDo";

const Home = ({todos, addToDo}) => {
    const [text, setText] = useState("")

    const handleValue = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setText("")
        addToDo(text)
    }

    return(
        <>
            <h1>TODO</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleValue}/>
                <button>Add</button>
            </form>
            <ul>
                {
                    todos.map(todo => <ToDo {...todo} key={todo.id}/>)
                }
            </ul>
        </>
    )
}


// Home component props 에 store 데이터를 추가함
const mapStateToProps = (state) => {
    return {todos: state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (text) => dispatch(add(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
