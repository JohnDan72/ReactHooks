import { mount, shallow } from "enzyme"
import HomeScreen from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas Home screen', () => {
    const user = {
        name: 'Juan Dan',
        email: 'jgarcialopez837@gmail.com'
    }
    const setUser = jest.fn();

    let wrapper = mount(
        <UserContext.Provider value={{
            user , setUser
        }}>
            <HomeScreen />

        </UserContext.Provider>
    );

    test('debe renderizar el component', () => {

        expect(wrapper).toMatchSnapshot();
    });

    

})
