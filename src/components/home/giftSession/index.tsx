import { Container } from '@components/container';
import { StyledButton } from '@components/htmlTags/button';
import { Wrapper } from '@components/htmlTags/div';
import { Image } from '@components/htmlTags/img';
import { Text } from '@components/text';
import {
  FooterText,
  GiftSessionBox,
  ImageBox,
  TextBox,
  TextContentBox,
} from './styles';

export const GiftSession = () => {
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
            <Image src="shape.png" />
          </ImageBox>
          <TextBox>
            <Text type="h4">
              <strong>BRINDE</strong>
            </Text>
            <TextContentBox>
              <Text type="h3">
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
          <Text type="h3" color="#ffffff">
            O FUTURO DOS SALÕES
          </Text>
          <TextContentBox>
            <Text
              type="h5"
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
