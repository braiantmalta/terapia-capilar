import { StyledButton } from '@components/htmlTags/button';
import { Wrapper } from '@components/htmlTags/div';
// import { isTabletVersion } from '@components/isMobileVersion';
import { Text } from '@components/text';
import { Button, useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';
import { ButtonBox, TextBox } from './styles';

export const TextIntro = () => {
  const isTabletVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );

  return (
    <Wrapper>
      <TextBox>
        <Text
          type={isTabletVersion ? 'h3' : 'h2'}
          style={{ color: '#6A9B85' }}
        >
          Formação
        </Text>
        <Text
          type={isTabletVersion ? 'h2' : 'h1'}
          color="#ffffff"
          style={{
            margin: '17px 0px 18px',
          }}
        >
          <strong>
            Terapia <br />
            Capilar
          </strong>
        </Text>
        <Text
          type={isTabletVersion ? 'h5' : 'h4'}
          color="#ffffff"
        >
          Conteúdo teórico, <br /> demonstração e prática.
        </Text>
        <ButtonBox>
          <StyledButton title="SAIBA MAIS" />
        </ButtonBox>
      </TextBox>
    </Wrapper>
  );
};
