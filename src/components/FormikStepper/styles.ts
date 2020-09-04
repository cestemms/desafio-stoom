import styled from 'styled-components';

export const ButtonContainer = styled.div`

  display: flex;

  margin-top: 2rem;

  > button {
    width: 15rem;
    height: 5rem;
    border-radius: 0.8rem;
    font: 700 2.0rem Archivo;

    margin-right: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    border: none;
    outline: 0;
    color: var(--color-button-text);

    transition: background-color 0.2s;

    background: var(--color-secondary);

    &:hover {
      background: var(--color-secondary-dark);
    }

    &[type=submit] {
      background: var(--color-primary-lighter);

      &:hover {
        background: var(--color-primary-light);
      }
    }
  }
`;