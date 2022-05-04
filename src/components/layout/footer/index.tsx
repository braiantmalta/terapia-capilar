import { Container } from '@components/container';
import { Wrapper } from '@components/htmlTags/div';
import { Image } from '@components/htmlTags/img';
import { Text } from '@components/text';
import { Logo } from '../logo';
import {
  FooterContent,
  TextBox,
  ContentBox,
  IconsBox,
  IconButton,
  FooterWrapper,
  FooterImage,
} from './styles';

export const Footer = () => {
  return (
    <Wrapper>
      <FooterWrapper>
        <FooterImage>
          <Image src="/wave_2.png" width={'80%'} />
        </FooterImage>

        <FooterContent>
          <Container
            style={{
              marginBottom: '0px',
            }}
          >
            <TextBox>
              <Text type="h5" color="#ffffff">
                Title Here
              </Text>
              <ContentBox>
                <Text type="h6" color="#ffffff">
                  Ex amet culpa excepteur voluptate sunt.
                  Aute ut eu nostrud elit cillum id laboris.
                  Ea in in ut eu nostrud elit proident
                  cillum laboris et. Voluptate dolor commodo
                  tempor.
                </Text>
              </ContentBox>
              <IconsBox>
                <IconButton>
                  <Logo
                    url="/instagram-logo.svg"
                    style={{ width: '25px' }}
                  />
                </IconButton>
                <IconButton>
                  <Logo
                    url="/facebook-logo.svg"
                    style={{ width: '25px' }}
                  />
                </IconButton>
                <IconButton>
                  <Logo
                    url="/whatsapp-logo.svg"
                    style={{ width: '25px' }}
                  />
                </IconButton>
              </IconsBox>
            </TextBox>
          </Container>
        </FooterContent>
      </FooterWrapper>
    </Wrapper>
  );
};
