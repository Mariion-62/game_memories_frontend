import Header from 'components/Header';
import { Link } from 'react-router-dom';
import SHomePAge from './style';

export default function HomePage() {
  return (
    <>
      <Header />
      <SHomePAge>
        <section className="allBtn">
          <Link className="link" id="home" to="/game">
            <button type="button">Jouez</button>
          </Link>
          <Link className="link" id="home" to="/library">
            <button type="button">Gallerie</button>
          </Link>
          <Link className="link" id="home" to="/rules">
            <button type="button">Régles</button>
          </Link>
        </section>
      </SHomePAge>

      {/* <Footer /> */}
    </>
  );
}
