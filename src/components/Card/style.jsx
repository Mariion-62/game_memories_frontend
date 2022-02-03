import styled from 'styled-components';

const SCard = styled.div`
 
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    border-radius: 10%;
    height: 20vh;
    width: 15vw;
    background: white;
    box-shadow: 1px 6px 13px 1px rgba(0, 0, 0, 0.42);
    -webkit-box-shadow: 1px 6px 13px 1px rgba(0, 0, 0, 0.42);
    -moz-box-shadow: 1px 6px 13px 1px rgba(0, 0, 0, 0.42);

    img {
      max-width: 100%;
      max-height: 85%;
      margin: auto;
    }
  }

  .hiddeCard {
    transform: rotateY(180deg);
    animation: 2s hideCard linear;
    transition: transform 0.5s;

    @keyframes hideCard {
      0%,
      70% {
        transform: rotateY(0);
      }
      100% {
        transform: rotateY(180deg);
      }
    }

    img,
    h2 {
      transform: scale(0);
      animation: 1.8s hideImage linear;
      transition: transform 0.5s;
    }
    @keyframes hideImage {
      0%,
      70% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
  }

  .showCard {
    transform: rotateY(0)
    animation: 2s showCard linear;
    transition: transform 0.5s;

    @keyframes showCard {
      0%,
      70% {
        transform: rotateY(180deg);
      }
      100% {
        transform: rotateY(0);
      }
    }
  }


`;
export default SCard;
