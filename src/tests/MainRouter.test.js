import { mount, shallow } from "enzyme"
import MainRouter from "../MainRouter";

describe('Pruebas Main Router', () => {
    
    const wrapper = shallow(<MainRouter />);

    test('debe renderizar el component', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
})
