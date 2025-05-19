
import { useContext } from 'react';
import {Navigate,useLocation} from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);
    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

  return (
    // Si el usuario está logueado, se muestra el componente hijo
    // Si no, se redirige a la página de login
    (logged)
    ? children
    : <Navigate to="/login" />
  )
}
