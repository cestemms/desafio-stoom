import styled from 'styled-components';

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    align-items: space-between;
  }

  @media (min-width: 700px) {
    padding: 2.6rem;
  }
`;

export const PopupCard = styled.div`
    background: var(--color-box-base);
    width: 100%;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;

    text-align: center;

    > div {
      display: flex;
      justify-content: center;
      margin: 3.2rem 0;
    }

`;
