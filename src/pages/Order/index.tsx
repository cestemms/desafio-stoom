import React from 'react';
import PageHeader from '../../components/PageHeader';
import FormComponent from '../../components/FormComponent';

import { Container } from './styles'


function Order() {

  return(
    <Container>
      <PageHeader title="Selecione o tipo de Pizza que você deseja"/>             
        <main>
          <FormComponent/>
        </main>
    </Container>
  )
}
export default Order;

