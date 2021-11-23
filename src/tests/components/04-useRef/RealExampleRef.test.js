import { shallow } from "enzyme"
import RealExampleRef from "../../../components/04-useRef/RealExampleRef";


describe('Pruebas para RealExampleRef', () => {

    let wrapper = shallow(<RealExampleRef />);

    beforeEach(() => {
        wrapper = shallow(<RealExampleRef />);
    });


    test('debe renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });


    test('debe mostrar el componente <MultipleCustomHooks/>', () => {
        const btn = wrapper.find('Button');
        btn.simulate('click');
        const multiple = wrapper.find('MultipleCustomHooks');

        expect(wrapper).toMatchSnapshot();
        expect(multiple.exists()).toBe(true);

    })


})