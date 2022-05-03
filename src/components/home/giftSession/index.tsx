import { Container } from '@components/container';
import { StyledButton } from '@components/htmlTags/button';
import { Wrapper } from '@components/htmlTags/div';
import { Image } from '@components/htmlTags/img';
import { Text } from '@components/text';
import { useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';
import {
  FooterText,
  GiftSessionBox,
  ImageBox,
  TextBox,
  TextContentBox,
} from './styles';

export const GiftSession = () => {
  const isTabletVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );

  return (
    <Wrapper>
      <Image
        src="wave_1.png"
        width={'100%'}
        height={'50%'}
      />
      <Container>
        <GiftSessionBox>
          <ImageBox>
            <Image
              src="shape.png"
              width={isTabletVersion ? '80%' : '100%'}
            />
          </ImageBox>
          <TextBox>
            <Text type={isTabletVersion ? 'h5' : 'h4'}>
              <strong>BRINDE</strong>
            </Text>
            <TextContentBox>
              <Text type={isTabletVersion ? 'h4' : 'h3'}>
                <strong>
                  CÂMERA
                  <br />
                  CAPILAR
                </strong>
              </Text>
            </TextContentBox>
            <StyledButton
              backgroundColor="#6A9B85"
              color="#ffffff"
            />
          </TextBox>
        </GiftSessionBox>
        <FooterText>
          <Text
            type={isTabletVersion ? 'h4' : 'h3'}
            color="#ffffff"
            textAlign="center"
          >
            O FUTURO DOS SALÕES
          </Text>
          <TextContentBox>
            <Text
              type={isTabletVersion ? 'h6' : 'h5'}
              color="#ffffff"
              textAlign="center"
            >
              Venha se tornar um terapeuta capilar, e faça
              parte da nova tendência de profissionais
              naturalistas, que além da beleza dos fios se
              preocupam também com a saude
            </Text>
          </TextContentBox>
        </FooterText>
      </Container>
    </Wrapper>
  );
};
