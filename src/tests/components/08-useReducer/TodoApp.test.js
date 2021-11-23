const { shallow } = require("enzyme")
import TodoApp from "../../../components/08-useReducer/TodoApp";

describe('Pruebas TodoApp', () => {


    let wrapper = shallow(<TodoApp />);

    test('debe renderizar el component', () => {
        // console.log(wrapper.props())
        expect(wrapper).toMatchSnapshot();
    })
    
})
