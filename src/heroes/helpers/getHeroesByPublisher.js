
import {heroes} from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {

    const validarPublisher = ['DC Comics', 'Marvel Comics'];

    if ( !validarPublisher.includes( publisher ) ) {
        throw new Error(`Publisher "${ publisher }" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publisher ); //validamos que retorne el publisher que le pasamos
}

export default getHeroesByPublisher;