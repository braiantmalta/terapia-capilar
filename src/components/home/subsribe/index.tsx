import * as Yup from 'yup';
import {
  StyledButton,
  StyledInput,
} from '@components/htmlTags';
import { Wrapper } from '@components/htmlTags/div';
import { Text } from '@components/text';
import {
  ButtonBox,
  InputBox,
  SubscribeBox,
  SubsribeContent,
  TextBox,
  TextFieldStyled,
} from './styles';
import { Form, Formik } from 'formik';
import { makeStyles } from '@mui/styles';

type SubsribeInput = {
  email?: string;
};

export const Subscribe = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('tipo de email inválido')
      .notRequired()
      .nullable(),
  });

  const handleSubmit = (values: SubsribeInput) => {
    console.log('values', values);
  };

  return (
    <Wrapper>
      <SubscribeBox>
        <SubsribeContent>
          <Text type="h3">
            <strong>INSCREVA-SE</strong>
          </Text>
          <TextBox>
            <Text type="h4" textAlign="center">
              Quantos dos seus clientes sofrem com algum
              tipo de proble-
              <br />
              ma no couro cabeludo ou nos fios? Cadastre-se
              e se torne um
              <br />
              terapeuta capilar e ajude seus clientes a
              terem mais saúde.
            </Text>
          </TextBox>
          <Formik
            initialValues={{} as SubsribeInput}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            validationSchema={schema}
          >
            {({ errors, handleChange }) => (
              <Form>
                <InputBox>
                  <TextFieldStyled
                    name="email"
                    label="E-mail"
                    type="email"
                    onChange={handleChange}
                    helperText={errors.email}
                    style={{
                      backgroundColor: '#f4f4f4',
                      borderRadius: '100px',
                      width: '600px',
                    }}
                  />
                  <ButtonBox>
                    <StyledButton
                      type="submit"
                      backgroundColor="#6A9B85"
                      color="#ffffff"
                      title="INSCRIÇÃO"
                      height="55px"
                    />
                  </ButtonBox>
                </InputBox>
              </Form>
            )}
          </Formik>
        </SubsribeContent>
      </SubscribeBox>
    </Wrapper>
  );
};
