

import React from 'react'
import {HeroCard} from '../components';
import {useForm} from '../../hooks/useForm';
import {useNavigate, useLocation} from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search); //Se obtiene el query string de la URL
  const heroes = getHeroesByName(q); //Se obtiene el array de heroes filtrados por el query string
  const showSearch = (q.length === 0); //Se muestra el mensaje de "Search a hero" si no hay query string
  const showError = (q.length > 0) && heroes.length === 0; //Se muestra el mensaje de "No hero with..." si hay query string y no hay heroes


  const {searchText, onInputChange, onResetForm} = useForm({
    searchText: ''
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim() === q) return; // Si el valor del input es igual al valor del query string, no se hace nada
    //if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
    onResetForm();
  }

  return (
    <>
      <h1>Search</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={onSearchSubmit}>
            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              autoComplete="off"
              name='searchText'
              value={searchText}
              onChange={onInputChange}
            />
            <button
              className="btn btn-outline-primary mt-1"
            >
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr/>
          {
            showSearch
            ?  <div className="alert alert-primary animate__animated animate__fadeIn"> Search a hero </div>
            : showError && <div className="alert alert-danger animate__animated animate__bounceIn"> No hero with <b>{q}</b> </div>
          }
          {
            heroes.map(hero => (
              <HeroCard 
                key={hero.id}
                {...hero} //Se desestructura el objeto hero y se pasan las propiedades como props
              />
            ))
          }
        </div>      
      </div>
    </>
  )
}

export default SearchPage;
