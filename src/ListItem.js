import React from "react";
import './App.css';

function ListItem(props) {



    return (
        <div>
            {props.el.counter}

        </div>

    );
}

export default ListItem;
