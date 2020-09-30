import React from "react";
import './App.css';

function CounterList(props){

    return(
        <div>
            {props.list.map((el, i) => <div key={Math.random()}>
                <button onClick={()=> props.counterMinus(i) }>-</button>
                {el}
                <button onClick={()=> props.counterPlus(i) }>+</button>

            </div>)}
        </div>
    );

}

export default CounterList;



