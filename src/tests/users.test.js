import { getUser, getUserByRol, getRoles } from "../utils/users";

import data from '../data.json';

describe('Probar los metodos de usuario', () => {

    test('getUser: Retorna un usuario', () => {
        const id = 1;
        const user = data.find(u => u.id === id);

        expect(getUser(id)).toEqual(user);
    });

    test('getUser: Retorna un undefined sino lo encuentra', () => {
        const id = 8;
        
        expect(getUser(id)).toBeUndefined();
    });

    test('getUserByRol: Retorna usuarios por roles', () => {
        const usuariosRol = getUserByRol("dev");
        
        expect(usuariosRol).toHaveLength(2);
    });

    test('getRoles: Retorna los roles de los usuarios', () => {
        const expected = ['admin', 'dev', 'marketing', 'analyst'];
        
        expect(getRoles()).toEqual(expect.arrayContaining(expected));
    });

});