import { hello } from "../utils/basic";


describe('Pruebas en el archivo de basic.js', () => {
    test('Test Hello Jest', () => {
        expect(hello()).toBe("Hello Jest")
    });
    
    test('Test Not Hello Jest', () => {
        expect(hello()).not.toBe("Hello World")
    });
});

