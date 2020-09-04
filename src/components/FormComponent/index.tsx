import React from 'react';
import {CardContent} from '@material-ui/core';

import { FormikStepper } from '../FormikStepper';
import { Step1, Step2, Step3 } from '../Steps';


import { Container } from './styles';


export default function FormComponent() {
  return (
    <Container>
      <CardContent>
        <FormikStepper
        initialValues={{
          name: '',
          email: '',
          phone: '',
          size: '',
          choose: ''
        }} onSubmit={() => {}}>
            <Step1/>
            <Step2/>
            <Step3/>
        </FormikStepper>
        </CardContent>
    </Container>
  );
};


