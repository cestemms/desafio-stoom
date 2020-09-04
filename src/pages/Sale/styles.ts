import styled from 'styled-components';

export const Container = styled.div`

  width: 100vw;
  margin: 0 auto;

  > main {
    background: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    text-align: center;

    > h1 {
      margin-bottom: 1.6rem;
    }

    > div {
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

        background: var(--color-secondary);

        &:hover {
          background: var(--color-secondary-dark);
        }
      }
    }

  }

  @media (min-width: 700px) {
    width: 100%;
  }
`;