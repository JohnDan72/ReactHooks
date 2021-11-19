

console.log("Initial state jeje");

const initialState = [{
    id: 1,
    todo: 'Comprar pizza',
    done: false,
}];


// my reducer function
const toDoReducer = ( state = initialState , action ) => {
    if(action?.type === 'ADD_ITEM'){
        return [
            ...state,
            action.payload
        ]
    }
    return state;
};

let toDos = toDoReducer();


// new item
const newToDo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

// action
const addNewTodo = {
    type: 'ADD_ITEM',
    payload: newToDo
}

// add new todo with reducer function
toDos = toDoReducer( toDos , addNewTodo);

console.log(toDos);