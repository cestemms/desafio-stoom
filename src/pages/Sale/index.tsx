import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';
import SaleOptions from '../../components/SaleOptions';

import { pizzaSale } from '../../docs/data'
import { Container } from './styles';

function Sale() {

  return(
    <Container>
      <PageHeader 
        title="Confira nossas promoções"
        description="Pedindo a Pizza do dia você ganha pontos e, cada 200 pontos, você ganha uma pizza"
      />
      <main>
          <h1>Pizza do Dia</h1>
          <SaleOptions options={pizzaSale}/>
          <div>
            <Link to="/order">
              Quero pedir uma pizza
            </Link>
        </div>
      </main>
    </Container>
  )
}
export default Sale;