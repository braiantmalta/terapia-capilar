import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Axios from 'axios';

import { StyledButton } from '@components/htmlTags';
import { Wrapper } from '@components/htmlTags/div';
import { Text } from '@components/text';
import {
  ButtonBox,
  InputBox,
  NewsLetterBox,
  NewLetterContent,
  TextBox,
  TextFieldStyled,
} from './styles';
import { Alert } from '@components/alert';
import { useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';
import { NewsLetterButton } from '@components/htmlTags/button/newsLetterButton';

type SubsribeInput = {
  email?: string;
};

export const NewsLetter = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const isTabletVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('tipo de email inválido')
      .notRequired()
      .nullable(),
  });

  const handleSubmit = async (values: SubsribeInput) => {
    setLoading(true);
    try {
      const res = await Axios.post('/api/newsletter', {
        email,
      });
      Alert({
        icon: 'success',
        title: 'Sucesso',
        text: 'Email cadastrado com sucesso! Verifique sua caixa de entrada nos próximos minutos para começar a fazer a diferença!',
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
    console.log('values', values);
  };

  return (
    <Wrapper>
      <NewsLetterBox>
        <NewLetterContent>
          <Text type={isTabletVersion ? 'h4' : 'h3'}>
            <strong>INSCREVA-SE</strong>
          </Text>
          <TextBox>
            <Text
              type={isTabletVersion ? 'h5' : 'h4'}
              textAlign="center"
            >
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
            validateOnChange={false}
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
                      width: isTabletVersion
                        ? '300px'
                        : '600px',
                    }}
                  />
                  <ButtonBox>
                    <NewsLetterButton
                      type="submit"
                      backgroundColor="#6A9B85"
                      color="#ffffff"
                      title="INSCRIÇÃO"
                      height="55px"
                      sx={{
                        fontSize: '45px',
                        marginTop: '24px',
                      }}
                    />
                  </ButtonBox>
                </InputBox>
              </Form>
            )}
          </Formik>
        </NewLetterContent>
      </NewsLetterBox>
    </Wrapper>
  );
};
