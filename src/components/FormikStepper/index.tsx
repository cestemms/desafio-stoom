import React, { useState } from 'react';
import { Formik, Form, FormikConfig, FormikValues } from 'formik';
import { ButtonContainer } from './styles';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time)); 

export interface FormikStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
}

export function FormikStep({children}: FormikStepProps) {
  return <>{children}</>
}

export function FormikStepper({children, ...props}: FormikConfig<FormikValues>) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step] as React.ElementType<FormikStepProps>;


  function isLastStep(){
    return step === childrenArray.length -1;
  }

  return (
    <Formik {...props}
      onSubmit={async(values, helpers) => {
          if(isLastStep()) {
            await props.onSubmit(values, helpers);
            await sleep(3000);
            
          } else {
            setStep(s => s+1);
          }
    }}>
      {({isSubmitting}) => (
          <Form>
          {currentChild}
          <ButtonContainer>
            {step > 0 && <button onClick={() => setStep(s=> s-1)}>Voltar</button>}      
            <button type="submit">{isLastStep() ? 'Finalizar Pedido' : 'Próximo'}</button> 
          </ButtonContainer> 
            {isSubmitting && <h2>Estamos processando o seu pedido</h2>}

        </Form>
      )}
    </Formik>
  );
}