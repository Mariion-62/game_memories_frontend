import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SCards from './style';

export default function Cards() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:6060/cards`)
      .then(({ data }) => {
        setCharacters(data);
      })

      .catch(() => {
        toast('ERROR');
      });
  }, []);
  return (
    <SCards>
      <section className="card">
        {characters.map((character) => (
          <div className="cardCharacter">
            <img
              className="imgCharacter"
              src={character.picture}
              alt={character.name}
            />
            <h2 className="nameCharacter">{character.name}</h2>
          </div>
        ))}
      </section>
    </SCards>
  );
}
