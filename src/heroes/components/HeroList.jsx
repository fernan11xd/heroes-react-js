

import {useMemo} from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers'

export const HeroList = ({publisher}) => {

    const heroes  = useMemo(() => getHeroesByPublisher(publisher), [publisher]); 
    //Usando el hook useMemo para memorizar el resultado de la función getHeroesByPublisher, 
    // evitando que se vuelva a calcular en cada renderizado. 
    // El segundo argumento es un array de dependencias, en este caso solo depende de publisher.

   // console.log(heroes);

  return (
    <>
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
             {
                heroes.map( hero => (
                    <HeroCard key={hero.id}
                        {...hero} // Spread operator
                    />
                ))
            }
        </div>
    </>
  )
}

export default HeroList;
