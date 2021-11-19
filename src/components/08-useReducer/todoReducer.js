

export const todoReducer = (state, action) => {

    switch (action?.type) {
        case 'C_ITEM':
            return [...state, action.payload];
        case 'U_ITEM':
            break;
        case 'D_ITEM':
            return state.filter(todo => todo.id !== action.payload);
        case 'TOGGLE':
            return state.map(todo => (todo.id === action.payload)
                ? { ...todo, done: !todo.done }
                : todo
            )
        // return state.map( todo => {
        //     if( todo.id === action.payload){
        //         return {
        //             ...todo,
        //             done: !todo.done
        //         }
        //     }
        //     else{
        //         return todo;
        //     }
        // })
        default:
            return state;

    }

}