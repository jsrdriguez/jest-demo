import { 
    transformTextToUrl, 
    isEmail, 
    minLength
} from "../utils/tools";


describe('Probar la funciones de herramientas', () => {

    test('Probar transformTextToUrl', () => {
        const textUrl = "Google anuncia su nuevo android";
        const expected = "google-anuncia-su-nuevo-android";
        
        
        expect(transformTextToUrl(textUrl)).toEqual(expected);
    });

    test('Probar que no transforme la url', () => {
        const textUrl = "Google anuncia su nuevo android";
        const expected = "google-anuncia su nuevo android";
        
        
        expect(transformTextToUrl(textUrl)).not.toEqual(expected);
    });

    test('Probar la funcion si un email es correcto', () => {
        const email = "admin@test.com";

        expect(isEmail(email)).toBeTruthy()
    });

    test('Probar la funcion si un email es Incorrecto', () => {
        const email = "admintest.com";

        expect(isEmail(email)).toBeFalsy()
    });

    test('Probar que el tamaño de texto sea menor: minLength', () => {
        const text = "Hello world"

        expect(minLength(text, 2)).toBe(true);
    });

    test('Probar que el tamaño de texto sea menor, negativo: minLength', () => {
        const text = "H"

        expect(minLength(text, 2)).not.toBe(true);
    });
})