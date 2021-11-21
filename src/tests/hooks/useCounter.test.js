import { renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('Pruebas useCounter', () => {
    test('debe retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { state, increment, decrement, reset } = result.current
        console.log(result.current);

        expect(typeof state).toBe('number');
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');
    })
})