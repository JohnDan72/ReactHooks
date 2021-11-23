import { act, renderHook } from "@testing-library/react-hooks";
import { useSimpleForm } from "../../hooks/useSimpleForm";


describe('Pruebas al useSimpleForm' , () => {
    const initialForm = {
        name: 'Juan Dan',
        email: 'jgarcialopez837@gmail.com',
    }
    let result = renderHook(() => useSimpleForm(initialForm)).result;

    beforeEach(() => {
        result = renderHook(() => useSimpleForm(initialForm)).result;
    });

    test('debe retornar el type de cada elemento retornado', () => {
        const { formValue , handleInputChange , reset , setFormValue } = result.current;

        expect(typeof formValue).toBe('object');
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
        expect(typeof setFormValue).toBe('function');
    });
    test('debe retornar un form por defecto', () => {
        const { formValue } = result.current;

        // console.log(formValue);

        expect(formValue).toEqual(initialForm);
    });

    test('debe cambiar el valor del forulario', () => {
        const change = 'Daniel García';

        const { handleInputChange } = result.current;
        act(() => {
            handleInputChange({ name: 'name' , value: change});
        });

        const { formValue } = result.current;

        expect(formValue).toEqual({ ...initialForm , name: change});
    });

    test('debe restablecer el form con reset', () => {
        const change = 'Daniel García';

        const { handleInputChange , reset } = result.current;
        act(() => {
            handleInputChange({ name: 'name' , value: change});
            reset();
        });

        const { formValue } = result.current;

        expect(formValue).toEqual(initialForm);
    });
    
})