import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Card from 'components/Card';
import SCards from './style';

export default function Cards() {
  const [characters, setCharacters] = useState([]);
  const pairOfCards = [...characters, ...characters];

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
      {pairOfCards.map((character) => {
        return <Card name={character.name} picture={character.picture} />;
      })}
    </SCards>
  );
}
