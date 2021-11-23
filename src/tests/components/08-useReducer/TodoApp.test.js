const { shallow, mount } = require("enzyme")
import { act } from "@testing-library/react";
import TodoApp from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demosTodos";


describe('Pruebas TodoApp', () => {

    Storage.prototype.setItem = jest.fn(() => {});
    
    test('debe renderizar el component', () => {
        const wrapper = shallow(<TodoApp />);
        // console.log(wrapper.props())
        expect(wrapper).toMatchSnapshot();
    });

    test('debe agregar un todo', () => {
        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find('FormTask').prop('handleAdd')( demoTodos[0] );
            wrapper.find('FormTask').prop('handleAdd')( demoTodos[1] );
        });

        expect(wrapper.find('h3').text().trim()).toBe('TodoApp (total: 2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        // expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });

    test('debe eliminar un todo', () => {
        const wrapper = shallow(<TodoApp />);

        wrapper.find('FormTask').prop('handleAdd')( demoTodos[2] ); 
        wrapper.find('ListTodos').prop('handleDelete')( demoTodos[2].id ); 
        
        expect(wrapper.find('h3').text().trim()).toBe('TodoApp (total: 0)');

    })
    
    
    
})
