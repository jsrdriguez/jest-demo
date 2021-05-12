import { sumar, multiplicar } from "../utils/calculator";

describe('Prueba las operaciones de la calculadora', () => {

    test('2 + 4 = 6, Probar suma', () => {
        const a = 2;
        const b = 4;

        expect(sumar(a, b)).toBe(6);
    });

    test('2 + 4 = 6, Probar que el resultado sea mayor a 5', () => {
        const a = 2;
        const b = 4;

        expect(sumar(a, b)).toBeGreaterThan(5);
        expect(sumar(a, b)).toBeGreaterThanOrEqual(6);
    });

    test('5 * 2 = 10, Probar la funcion de multiplicacion ', () => {
        const a = 5;
        const b = 2;

        expect(multiplicar(a, b)).toBe(10)
    });

    test('5 * 2 = 10, Probar que el resultado de multiplicar sea menor ', () => {
        const a = 5;
        const b = 2;

        expect(multiplicar(a, b)).toBeLessThan(11)
        expect(multiplicar(a, b)).toBeLessThanOrEqual(10)
    });

})