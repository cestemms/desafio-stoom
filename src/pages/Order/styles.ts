import styled from 'styled-components';

export const Container = styled.div`

  width: 100vw;
  margin: 0 auto;

  @media (min-width: 700px) {
    width: 100%;

    > main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;