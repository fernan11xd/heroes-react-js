
import { useNavigate } from "react-router-dom";
import {heroes} from "../data/heroes";

export const getHeroById = (id) => { 
    return heroes.find(hero => hero.id === id);
}

export default getHeroById;