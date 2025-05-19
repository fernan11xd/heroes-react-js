

import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters, //PROPIERTIES
}) => {

  const heroImageUrl = `${import.meta.env.BASE_URL}assets/heroes/${id}.jpg`;
  const charactersByHero = <p className='text-muted'>{characters}</p>

  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4">
              <img src={heroImageUrl} className="card-img" alt={superhero} />
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className='card-title'>{superhero}</h5>
                <p className='card-text'>{alter_ego}</p>
                {
                  (alter_ego !== characters) && charactersByHero //Si alter_ego es diferente a characters, entonces muestra characters
                }
                <p className='card-text'>
                  <small className='text-muted'>{first_appearance}</small>
                </p>
                <Link to={`/hero/${id}`}> Más info... </Link>
                {/* <p className='card-text'>
                  <small className='text-muted'>{publisher}</small>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroCard;