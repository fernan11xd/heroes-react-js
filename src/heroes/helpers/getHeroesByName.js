
import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
    name = name.toLowerCase().trim();
    if (name.length === 0) return []; //Retorna un array vacio si no hay nombre

    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes(name)
    );

}

export default getHeroesByName;