import { Link } from 'react-router-dom';
import Cards from 'components/Cards';
import logoHome from 'components/Logo/logoHome.png';
import SGame from './style';

export default function Game() {
  return (
    <>
      <SGame>
        <header>
          <Link id="home" to="/">
            <img src={logoHome} alt="Logo retour" className="imgLogo" />
          </Link>
          <h1>Jeu</h1>
        </header>
        <Cards />
      </SGame>
    </>
  );
}
