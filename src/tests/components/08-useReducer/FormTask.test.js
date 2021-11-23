const { shallow } = require("enzyme")
import FormTask from "../../../components/08-useReducer/FormTask";

describe('Pruebas TodoApp', () => {
    
    const handleAdd = jest.fn();
    let wrapper = shallow(<FormTask handleAdd={handleAdd}/>);

    test('debe renderizar el component', () => {
        // console.log(wrapper.props())
        expect(wrapper).toMatchSnapshot();
    });
    
    test('no debe llamar handleAdd todo', () => {
        const formsubmit = wrapper.find('Form').prop('onSubmit');
        formsubmit();
        console.log(formsubmit);

        expect(handleAdd).toHaveBeenCalledTimes(0);

    });

    test('debe llamar handleAdd todo con un argumento', () => {
        const formsubmit = wrapper.find('Form').prop('onSubmit');
        const inputform = wrapper.find('FormControl');
        inputform.simulate('change','Aprender Python');

        console.log(wrapper.find('FormControl').props())

        // formsubmit();

        // expect(handleAdd).toHaveBeenCalledTimes(1);

    });
})