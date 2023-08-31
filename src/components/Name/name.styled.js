import styled from 'styled-components';
import { ErrorMessage, Form } from 'formik';

export const Container = styled(Form)`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 230px;
`;

export const StyledError = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
`;
