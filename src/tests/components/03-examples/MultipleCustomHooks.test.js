import { shallow } from "enzyme"
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks"
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas MultipleCustomHooks', () => {

    beforeEach(() => {
        useCounter.mockReturnValue({
            state: 1,
            increment: () => { },
            decrement: () => { },
            reset: () => { },
        });
    });

    test('debe renderizar el component ', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true
        });
        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar la info ', () => {

        const [author, quote] = ['Juan', 'Hola mundo']
        useFetch.mockReturnValue({
            data: [
                {
                    author,
                    quote
                }
            ],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);

        const iconTags = wrapper.find('Icon');
        const h5Tag = wrapper.find('h5');
        const h6Tag = wrapper.find('h6');

        expect(wrapper).toMatchSnapshot();
        expect(iconTags.exists()).toBe(false);
        expect(h5Tag.text().includes(author)).toBe(true);
        expect(h6Tag.text().includes(quote)).toBe(true);
    });


})