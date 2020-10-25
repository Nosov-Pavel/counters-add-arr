import React from "react";
import './App.css';

function ListItem(props) {



    return (
        <div>
            {props.el.counter}
            <button>↑</button>

        </div>

    );
}

export default ListItem;
