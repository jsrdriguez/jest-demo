import { getApiUsers } from "../utils/api";

describe('Prueba de peticiones al api de usuarios', () => {

    test('getApiUsers: Consulta al api de usuarios', async () => {
        const result = await getApiUsers();

    
        expect(result.status).toBe(200);
    });
})