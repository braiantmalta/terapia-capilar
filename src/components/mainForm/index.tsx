import { StyledInput, Wrapper } from '@components/htmlTags';
import { FormButton } from '@components/htmlTags/button/formButton';
import { Text } from '@components/text';
import { useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';
import { ButtonBox, FormBox, FormContent } from './styles';

export const MainForm = () => {
  const isTabletVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );
  return (
    <Wrapper>
      <FormBox>
        <FormContent>
          <Text type={isTabletVersion ? 'subtitle1' : 'h5'}>
            <strong>
              Quantos dos seus clientes sofrem com algum
              tipo de problema no couro cabeludo ou nos
              fios?
            </strong>
          </Text>
          <Text
            type={isTabletVersion ? 'body2' : 'h6'}
            secondary
          >
            Cadastre-se e torne um terapeuta capilar e ajude
            seus clientes a terem mais saúde
          </Text>
          <StyledInput
            name="name"
            label="Nome"
            type="text"
            margin={isTabletVersion ? 'dense' : 'normal'}
          />
          <StyledInput
            name="email"
            label="E-mail"
            type="email"
            margin={isTabletVersion ? 'dense' : 'normal'}
          />
          <ButtonBox>
            <FormButton
              backgroundColor="#6A9B85"
              color="#ffffff"
              title="Fazer Inscrição"
              sx={{ width: '100%' }}
            />
          </ButtonBox>
        </FormContent>
      </FormBox>
    </Wrapper>
  );
};
