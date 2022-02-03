import { useState } from 'react';
import SCard from 'components/Card/style';
import PropTypes from 'prop-types';

export default function Card({ name, picture }) {
  const [open, setOpen] = useState(false);
  const flipCard = () => {
    setOpen(true);
  };

  return (
    <SCard>
      <button
        type="button"
        onClick={flipCard}
        className={open ? 'showCard' : 'hiddeCard'}
      >
        <h2 className="nameCharacter">{name}</h2>
        <img className="imgCharacter" src={picture} alt={name} />
      </button>
    </SCard>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
