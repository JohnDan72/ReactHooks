import { shallow } from "enzyme"
import HookApp from "../HookApp"


describe('Pruebas HookApp', () => {
    const [theme, setTheme] = ['dark', jest.fn()];

    test('debe renderizar el component', () => {
        const wrapper = shallow(<HookApp setTheme={setTheme}/>);

        expect(wrapper).toMatchSnapshot();
    })
})