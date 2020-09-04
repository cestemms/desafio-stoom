import React from 'react';
import { Wrapper, Container } from './styles';

interface SaleProps {
  options: Array<{
    day: string;
    flavor: string;
  }>
}

const SaleOptions: React.FC<SaleProps> = ({options}) => {
  return (
    <Container>
        {options.map(option =>{
          return (
            <Wrapper key={option.day}>
              <div>
                <h3>{option.day}</h3>
                <h3>{option.flavor}</h3>
              </div>
            </Wrapper>
          )
        })}
    </Container>
  );
}

export default SaleOptions;