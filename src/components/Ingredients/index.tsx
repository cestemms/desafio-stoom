import React from 'react';
import makeAnimated from 'react-select/animated';
import { ingredientsOptions } from '../../docs/data'

import Select from 'react-select';

import { Container } from './styles';

const animatedComponents = makeAnimated();

export default function Ingredients() {
  return (
      <Container>
      <div>
        <h2>Selecione os ingredientes:</h2>
      </div>
      <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={ingredientsOptions}
      />
    </Container>
    );
}

