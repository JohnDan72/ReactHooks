import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";
import LoginScreen from "../../../components/09-useContext/LoginScreen";

describe('Pruebas Login Screen', () => {

    const user = {
        name: 'Juan Dan',
        email: 'jgarcialopez837@gmail.com'
    }
    const setUser = jest.fn();

    let wrapper = mount(
        <UserContext.Provider value={{
            user , setUser
        }}>
            <LoginScreen />

        </UserContext.Provider>
    );

    test('debe renderizar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('debe ejectuar setUser con argumentos específicos', () => {
        wrapper.find('Button').prop('onClick')();

        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenLastCalledWith({
            id: 123,
            name: 'Juan Daniel Garcia',
            edad: 24
        });
    })
    
    
})
