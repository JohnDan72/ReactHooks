import { shallow } from "enzyme"
import ListTodoItem from "../../../components/08-useReducer/ListTodoItem";


describe('Pruebas ListTodoItem', () => {
    const todo = {
        id: 50 , 
        desc: 'Aprender React',
        done: false
    };
    const [ handleTogle , handleDelete ] = [ jest.fn() , jest.fn()];
    let wrapper = shallow(<ListTodoItem     todo={todo} 
                                            handleDelete={handleDelete} 
                                            handleTogle={handleTogle} />);

    beforeEach(() => {
        wrapper = shallow(<ListTodoItem     todo={todo} 
                                            handleDelete={handleDelete} 
                                            handleTogle={handleTogle} />);
    });

    test('debe renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

    test('debe llamar la función borrar', () => {
        wrapper.find('Button').simulate('click');
        // wrapper.find('Button').simulate('click',3);
        // wrapper.find('Button').simulate('click',4);
        expect(handleDelete).toHaveBeenCalledTimes(1);
        expect(handleDelete).toHaveBeenCalledWith(todo.id);
    });

    test('debe llamar la función toggle', () => {
        wrapper.find('Toggle').simulate('change', true);

        expect(handleTogle).toHaveBeenCalledTimes(1);
        expect(handleTogle).toHaveBeenCalledWith(todo.id);

    });

    test('debe mostrar correctamente el texto del elemento agregado', () => {
        const gridItems = wrapper.find('FlexboxGridItem');

        // console.log(gridItems.length);
        // console.log(gridItems.at(0).text()); 

        expect(gridItems.at(0).text().includes(todo.desc)).toBe(true);
    });

    test('debe tener la clase disabled si el todo esta en true', () => {
        const todo = { id: 55 , desc: 'Aprender Angular' , done: true };
        const wrapper = shallow(<ListTodoItem   todo={todo} 
                                                handleDelete={handleDelete} 
                                                handleTogle={handleTogle}/>);
        const gridItem = wrapper.find('FlexboxGridItem').at(0)
        // console.log(wrapper.find('FlexboxGridItem').at(0).prop('className'));

        expect(gridItem.prop('className').includes('disabled')).toBe(true);
    })
    
    
})
