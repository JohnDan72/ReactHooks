import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demosTodos";



describe('Pruebas todoReducer', () => {
    

    test('debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos , {});

        expect(state).toEqual(demoTodos);
    });

    test('debe agregar un todo', () => {
        const newTodo = {
            id: 4,
            desc: 'Nuevo todo',
            done: false
        };
        const action = {
            type: 'C_ITEM',
            payload: newTodo
        }
        const state = todoReducer(demoTodos , action);

        expect(state.length).toBe(4);
        expect(state).toEqual([ ...demoTodos , newTodo ]);
    });

    test('debe borrar un todo', () => {
        const idDelete = 2;
        const action = {
            type: 'D_ITEM',
            payload: idDelete
        }
        const state = todoReducer(demoTodos , action);
        const expected = demoTodos.filter( dem => dem.id !== idDelete );

        expect(state.length).toBe(demoTodos.length - 1);
        expect(state).toEqual(expected);
    });

    test('debe cambiar el valor de un todo', () => {
        const idDone = 2;
        const action = {
            type: 'TOGGLE',
            payload: idDone
        }
        const state = todoReducer(demoTodos , action);
        const expected = state.find( dem => dem.id === idDone );

        expect(state.length).toBe(demoTodos.length);
        expect(expected.done).toBe(true);
        
    })
    
    
})
