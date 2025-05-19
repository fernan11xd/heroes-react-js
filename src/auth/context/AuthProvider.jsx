


import { useReducer } from 'react';
import {AuthContext} from './AuthContext'
import { authReducer } from './authReducer';
import {types} from '../types';

const initialState = {
    logged: false,
}

const init =  () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged: !!user, // Si existe el usuario, logged es true
        user: user,
    }
}


export const AuthProvider = ({children}) => {

  const [authState,dispatch] = useReducer(authReducer,initialState, init);

  const user = {id: 'ABC123', name: 'Usuario'};

  const login = async(name='') => {
    const action = { type: types.login,payload: user,}   
      
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(action);
  }
    
  const logout = () => {
    localStorage.removeItem('user'); //Elimina el usuario del localStorage
    const action = { type: types.logout }
    dispatch(action);
  }


  return (
    <AuthContext.Provider value={{
      ...authState, 
      //Metodos
      login,
      logout}}>
        
        {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
