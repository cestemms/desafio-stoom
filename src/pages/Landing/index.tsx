import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import landingImg from '../../assets/images/space-pizza.svg';

import rocketIcon from '../../assets/images/icons/Rocket.svg';
import Constellation from '../../assets/images/icons/Constellation.svg';

import { Container, LogoContainer, ButtonsContainer } from './styles';

function Landing() {

  return (
    <Container>
      <div>
        <LogoContainer>
          <img src={logoImg} alt="SpacePizza"/>
          <h2>Um sabor de outra galáxia</h2>
        </LogoContainer>

        <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
        />

        <ButtonsContainer>
          <Link to="/order">
            <img src={rocketIcon} alt="Rocket"/>
            Pedir uma Pizza
          </Link>

          <Link to="/sale">
            <img src={Constellation} alt="Constellation"/>
            Promoções
          </Link>
        </ButtonsContainer>

      </div>
    </Container>
  )
}

export default Landing;