import React from 'react';
import {connect} from "react-redux";
import {actionCreators} from "../store";

const ToDo = ({text, onButtonClick}) => {
    return(
        <li>
            {text}
            <button onClick={onButtonClick}>DEL</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onButtonClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null,mapDispatchToProps)(ToDo);
