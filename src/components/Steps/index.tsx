import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { StyledForm, PopupCard } from './styles';
import { FormikStep } from '../FormikStepper';
import * as yup from 'yup';
import Popup from 'reactjs-popup';

import Ingredients from '../Ingredients';
import Sale from '../../pages/Sale';


const personSchema = yup.object().shape({
  email: yup
      .string()
      .email()
      .required(),
  name: yup
      .string()
      .required(),
  phone: yup
      .number()
      .required()
      .positive()
      .integer(),
});

export function Step1 () {
  return (
    <FormikStep
    validationSchema={personSchema}>
      <h2>Preencha seus dados para começar o pedido</h2>
        <StyledForm>
          <Field name="name" component={TextField} label="Nome"/>
          <Field name="phone" component={TextField} label="Telefone" type="number"/>
          <Field name="email" component={TextField} type="email" label="Email" placeholder="seuemail@provedor.com.br"/>
        </StyledForm>
    </FormikStep>
  );
};

export function Step2 () {
  return (
    <FormikStep>
      <h2>Qual o tamanho da sua fome? </h2>
        <StyledForm>
        
            <label>
              <Field name="size" type="radio" value="pequena"/>
              Pequena (27cm)
            </label>

            <label>
              <Field name="size" type="radio" value="media"/>
              Média (30cm)
            </label>
            <label>
              <Field name="size" type="radio" value="grande"/>
              Grande (35cm)
          </label>
        </StyledForm>
      </FormikStep>
  );
}

export function Step3 () {
  return (
    <FormikStep>
      <h2>E o que você prefere?</h2>
      <div>
        <label>
        <Popup trigger={<Field name="choose" type="radio" value="dia"/>} modal>
            <div>
              <Sale/>
            </div>
          </Popup>
          Praticidade, quero a Pizza do dia!
        </label>
      </div>
        <div>
          <label>
            <Popup trigger={<Field name="choose" type="radio" value="montar"/> } modal>
              <PopupCard>
                <Ingredients/>
              </PopupCard>
            </Popup>
          Aventura, quero montar minha própria pizza!
          </label>
          
        </div>
    </FormikStep>
  );
}
