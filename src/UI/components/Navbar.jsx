
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../auth/context';

export const Navbar = () => {

    const {user,logout} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout =  () => {       
        logout();        

        navigate('/login',{
            replace: true
        });

        
    }
    

    return(
        <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
            <Link
                className='navbar-brand'
                to='/'
            >
                Asociaciones
            </Link>

            <div className='collapse navbar-collapse'>
                <div className='navbar-nav'>
                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to='/marvel'
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to='/dc'
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to='/search'
                    >
                        Search
                    </NavLink>

                </div>
                <div className='navbar-collapse collpase w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                    <ul className='navbar-nav ml-auto'>
                        <span className='nav-item nav-link text-primary'>
                            {user?.name}
                        </span>
                        <button className='nav-item nav-link btn' 
                        onClick={handleLogout}>
                        Salir</button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;