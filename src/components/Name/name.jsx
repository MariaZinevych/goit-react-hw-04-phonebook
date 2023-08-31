import { Formik, Field } from 'formik';
import { Container, StyledError } from './name.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().min(2, 'Too Short!').required('Required'),
});

export const Phonebook = ({ onAdd }) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          onAdd({ ...values, id: nanoid() });
          console.log('values', values);
          actions.resetForm();
        }}
      >
        <Container>
          <label htmlFor="firstName">
            Name
            <Field name="name" />
            <StyledError name="name" />
          </label>

          <label htmlFor="email">
            Number
            <Field name="number" type="tel" />
            <StyledError name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Container>
      </Formik>
    </>
  );
};
