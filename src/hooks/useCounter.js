import { useState } from "react"


export const useCounter = ( initialState = 3 ) => {
    // if(initialState <= 0 || initialState > 20){
    //     initialState = 0;
    // }

    const [state, setState] = useState(initialState);
    const increment = (value = 1) => setState(state + value);
    const decrement = (value = 1) => setState(state - value);
    
    // const increment = ( value = 1 ) => {
    //     if(state + value <= 20) {setState(state + value)}
    // };
    // const decrement = ( value = 1 ) => {
    //     if(state - value >= 1) {setState(state - value)}
    // };
    const reset = () => setState(1);

    return {
        state,
        increment,
        decrement,
        reset,
    }
}