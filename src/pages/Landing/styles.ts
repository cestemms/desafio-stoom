import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);

  > div {
    width: 90vw;

    > img {
      width: 100%;
    }
  }

  @media (min-width: 1100px) {
    > div {
      max-width: 1100px;

      display: grid;
      grid-template-rows: 350px 1fr;
      grid-template-columns: 2fr 1fr 1fr;
      grid-template-areas: 
        "logo hero hero"
        "buttons buttons total"
        ;

      > img {
      grid-area: hero;
      justify-self: end;
    }
    }

  }
`;

export const LogoContainer = styled.div`

  text-align: center;
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;

  > img {
    height: 10rem;
  }

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;

    > h2 {
      text-align: center;
      font-size: 3.6rem;
    }

    > img {
      height: 100%;
    }
  }

`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  > a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2.0rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;

    > img {
      width: 6rem;
    }

    background: var(--color-secondary);

    &:hover {
      background: var(--color-secondary-dark);
    }

      &:first-child{
      margin-right: 1.6rem;
      background: var(--color-primary-lighter);

      :hover {
        background: var(--color-primary-light);
      }

      > img {
        width: 4.4rem;
        margin-right: 2.4rem;
      }
    }
  }

  @media (min-width: 1100px) {
      grid-area: buttons;
      justify-content: flex-start;

      > a {
        font-size: 2.4rem; 
      }
    }

`;

