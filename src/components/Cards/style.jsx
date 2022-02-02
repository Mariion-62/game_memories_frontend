import styled from 'styled-components';

const SCards = styled.div`
  .card {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 5%;
  }

  .cardCharacter {
    position: relative;
    display: flex;
    justify-content: center;
    border: 2px solid black;
    border-radius: 10%;
    width: 17vw;
    padding: 5px;
    background: white;
    box-shadow: 1px 6px 13px 1px rgba(0, 0, 0, 0.42);
    -webkit-box-shadow: 1px 6px 13px 1px rgba(0, 0, 0, 0.42);
    -moz-box-shadow: 1px 6px 13px 1px rgba(0, 0, 0, 0.42);
  }

  .imgCharacter {
    position: relative;
    height: 30vh;
    padding-top: 30px;
  }

  .nameCharacter {
    position: absolute;
    display: flex;
    margin: 5px;
    font-family: var(--font-family);
    font-size: 1.5rem;
  }
`;
export default SCards;
