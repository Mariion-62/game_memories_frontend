import { Link } from 'react-router-dom';
import logoHome from 'components/Logo/logoHome.png';
import SHeader from './style';

export default function Header() {
  return (
    <SHeader>
      <header>
        <Link id="home" to="/">
          <img src={logoHome} alt="Logo retour" className="imgLogo" />
        </Link>
        <h1>Bienvenue sur Memories</h1>
      </header>
    </SHeader>
  );
}
