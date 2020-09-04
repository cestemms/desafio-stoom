import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.svg';

import { Container, TopBar, Content } from './styles';



interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Container>
        <TopBar>
          <Link to="/">
            <img src={backIcon} alt="voltar"/>
          </Link>
          <img src={logoImage} alt="Space Pizza"/>
        </TopBar>

        <Content>
          <strong>
            {props.title}
          </strong>
          { props.description && <p>{props.description}</p> }
          {props.children}
        </Content>

    </Container>

  );
}

export default PageHeader;