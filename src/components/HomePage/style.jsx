import styled from 'styled-components';

const SHomePAge = styled.div`
  button {
    width: 25vw;
    height: 10vh;
    font-size: 6vh;
    font-family: var(--font-family);
    border: none;
    border-radius: 22px;
    margin-top: 10vh;
  }
  .allBtn {
    display: flex;
    justify-content: space-evenly;
  }

  button:hover {
    background: #ffc900;
  }

  .link {
    text-decoration: none;
  }
`;

export default SHomePAge;
