import { RiMovieFill } from 'react-icons/ri';
import './Navbar.css';
import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContextProvider/SearchContextProvider';

export const Navbar = () => {

  const [dark, setDark] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { term, setTerm } = useContext(SearchContext);

  useEffect(() => {
    if (term) {
      navigate(`/search?q=${ term }`, { state: { from: location.pathname }});
    } else if (!(!term && (location.pathname.includes('movie') || location.pathname.includes('tv')))) {
      navigate('/');
    }
  }, [term]);

  useEffect(() => {
    setDark(window.scrollY < 26);
    window.addEventListener('scroll', () => {
      setDark(window.scrollY < 26);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (term && !location.pathname.endsWith('search')) {
      setTerm('');
    }
  }, [location.pathname]);

  const handleClick = () => {
    if (term) {
      setTerm('');
    }
    window.scrollTo(0, 0);
  };

  return (
    <nav className={ `Navbar ${ !dark ? 'Navbar--dark' : '' }` }>
      <div className="Navbar__logo"
           onClick={ handleClick }>
        <Link to="/">
          <RiMovieFill />
        </Link>
      </div>

      <form onSubmit={ e => e.preventDefault() }>
        <input className="Navbar__search-input"
               value={ term }
               onChange={ (e) => setTerm(e.target.value) }
               type="text"
               aria-label="search"
               placeholder="Search movie" />
      </form>
    </nav>
  );
};