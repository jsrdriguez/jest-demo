import data from "../data.json";

export const getUser = (id) => data.find(user => user.id === id);

export const getUserByRol = (rol) => data.filter(user => user.rol === rol);

export const getRoles = () => {
    const rol = new Set();
    
    data.map(user => rol.add(user.rol));

    return Array.from(rol.values());
}
