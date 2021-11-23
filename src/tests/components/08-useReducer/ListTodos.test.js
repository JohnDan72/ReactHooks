import { shallow } from "enzyme"
import ListTodos from "../../../components/08-useReducer/ListTodos";
import { demoTodos } from "../../fixtures/demosTodos";


describe('Pruebas ListTodos', () => {
    const [ handleTogle , handleDelete ] = [ jest.fn() , jest.fn() ];
    let wrapper = shallow(<ListTodos    state={demoTodos}
                                        handleTogle={handleTogle}
                                        handleDelete={handleDelete}/>);
    // beforeEach(() => {
    //     wrapper = shallow(<ListTodos    state={demoTodos}
    //                                     handleTogle={handleTogle}
    //                                     handleDelete={handleDelete}/>);
    // });

    test('debe renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();    
    });

    test('debe tener 3 todos list items', () => {
        const listTodos = wrapper.find('ListTodoItem');

        expect(wrapper).toMatchSnapshot();    
        expect(listTodos.length).toBe(demoTodos.length)
    });

    test('debe tener un hijo con una función llamada igual al parámetro', () => {
        const listTodos = wrapper.find('ListTodoItem');

        expect(listTodos.at(0).prop('handleDelete')).toEqual( expect.any(Function));
        expect(listTodos.at(0).prop('handleTogle')).toEqual( expect.any(Function));
    })
    
})
