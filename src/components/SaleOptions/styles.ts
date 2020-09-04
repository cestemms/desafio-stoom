import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Wrapper = styled.article`
  display: flex;
  align-items: center;

  width: 80%;

  border-radius: 0.8rem;
  background-color: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  padding: 1.6rem;

  margin-bottom: 1rem;

  @media (min-width: 700px) {
    width: 60%;
  }
`;