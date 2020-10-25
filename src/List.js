import React from "react";
import './App.css';
import ListItem from "./ListItem";

function List(props) {



    return (
        <div>
            {props.list.map(el => <ListItem key={el.id} el={el}/>)}

        </div>

    );
}

export default List;
