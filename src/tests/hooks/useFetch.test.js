import { renderHook } from "@testing-library/react-hooks"
import { useFetch } from "../../hooks/useFetch"


describe('Pruebas de useFetch' , () => {
    const url = `https://www.breakingbadapi.com/api/quotes/1`;

    test('debe regresar el state', () => {
        const { result } = renderHook(() => useFetch(url));
        const { data , loading , error } = result.current;

        expect(data).toBe(null);        
        expect(loading).toBe(true);        
        expect(error).toBe(null);        
    });

    test('debe tener la info deseada', async() => {
        const { result , waitForNextUpdate } = renderHook(() => useFetch(url));
        await waitForNextUpdate();
        const { data , loading , error } = result.current;

        expect(data.length).toBe(1); //se retorna 1 solo objeto    
        expect(loading).toBe(false);        
        expect(error).toBe(null);
    })

    test('debe manejar el error', async() => {
        const { result , waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apiid/users?page=2'));
        await waitForNextUpdate();
        const { data , loading , error } = result.current;

        console.log(error);

        expect(data).toBe(null); //se retorna 1 solo objeto    
        expect(loading).toBe(false);        
        expect(error).not.toBe(null);
    });
    
    
})