import React from 'react';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Details({ toDo }) {
    const { id } = useParams();
    console.log(toDo)
    const _todo = toDo.find(list => list.id === parseInt(id))
    console.log(_todo)

    return (
        <>
            <h1>{_todo?.text}</h1>
            <h5>Created at: {_todo?.id}</h5>
        </>
    );
}

function mapStateToProps(state) {
    return { toDo:state };
}

export default connect(mapStateToProps)(Details);
