import { useContext } from 'react';
import {Navigate} from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';


export const PublicRouter = ({children}) => {

    const {logged} = useContext(AuthContext);

  return (
    // Si el usuario NO está logueado, se muestra el componente hijo
    // Si está logueado, se redirige a la página de heroes
    (!logged)
    ? children
    : <Navigate to="/marvel" />
  )
}
