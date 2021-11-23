const { shallow } = require("enzyme")
import FormTask from "../../../components/08-useReducer/FormTask";

describe('Pruebas FormTask', () => {
    
    const handleAdd = jest.fn();

    test('debe renderizar el component', () => {
        const wrapper = shallow(<FormTask handleAdd={handleAdd}/>);
        // console.log(wrapper.props())
        expect(wrapper).toMatchSnapshot();
    });
    
    test('no debe llamar handleAdd todo', () => {
        const wrapper = shallow(<FormTask handleAdd={handleAdd}/>);
        const formsubmit = wrapper.find('Form').prop('onSubmit');
        formsubmit();

        expect(handleAdd).toHaveBeenCalledTimes(0);

    });

    test('debe llamar handleAdd todo con un argumento', async() => {
        const wrapper = shallow(<FormTask handleAdd={handleAdd}/>);
        const value = 'Aprender Python';
        wrapper.find('FormControl').simulate('change',value);
        
        // NOTA: llamar a esta función despues de la simulación, evita null inesperados
        const formsubmit = wrapper.find('Form').prop('onSubmit');
        formsubmit();

        expect(handleAdd).toHaveBeenCalledTimes(1);
        expect(handleAdd).toHaveBeenCalledWith( expect.any(Object));
        expect(handleAdd).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

    });
})