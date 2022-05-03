import { Wrapper } from '@components/htmlTags/div';
import { Text } from '@components/text';
import { Button } from '@mui/material';
import { ButtonBox, TextBox } from './styles';

export const TextIntro = () => {
  return (
    <Wrapper>
      <TextBox>
        <Text type="h2" style={{ color: '#6A9B85' }}>
          Formação
        </Text>
        <Text
          type="h1"
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
        <Text type="h5" color="#ffffff">
          Conteúdo teórico, <br /> demonstração e prática.
        </Text>
        <ButtonBox>
          <Button
            type="button"
            variant="contained"
            size="large"
            style={{
              borderRadius: '100px',
              backgroundColor: '#ffffff',
              width: '250px',
              height: '60px',
            }}
          >
            <Text type="h5">
              <strong>SAIBA MAIS</strong>
            </Text>
          </Button>
        </ButtonBox>
      </TextBox>
    </Wrapper>
  );
};
