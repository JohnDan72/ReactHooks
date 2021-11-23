import { act, renderHook } from "@testing-library/react-hooks";
import { shallow } from "enzyme";
import { useCounter } from "../../hooks/useCounter";

describe('Pruebas useCounter', () => {
    const initValue = 55;

    test('debe retornar valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { state, increment, decrement, reset } = result.current
        // console.log(result.current);

        expect(typeof state).toBe('number');
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('debe tener counter en 100', () => {
        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;
        act(() => {
            increment();
        });
        const { state } = result.current;

        expect(state).toBe(101);

    });

    test('debe resetear el state al initial value', () => {
        const { result } = renderHook(() => useCounter(initValue));
        const { reset , increment } = result.current;
        act(() => {
            increment();
            reset();
        });
        const { state } = result.current;

        expect(state).toBe(initValue);
    });

    test('debe decrementar en 10 el state al initial value', () => {
        const { result } = renderHook(() => useCounter(initValue));
        const { reset , decrement } = result.current;
        act(() => {
            decrement(10);
        });
        const { state } = result.current;

        expect(state).toBe(initValue - 10);
    })
    
    
})