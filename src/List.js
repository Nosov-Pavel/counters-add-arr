import React from "react";
import './App.css';

function List(props) {



    return (
        <div>
            {props.list.map(el =>
            <div>
                {el.counter}
            </div>)}

        </div>

    );
}

export default List;
