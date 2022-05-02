import { Container } from '@components/container';
import { Wrapper } from '@components/htmlTags/div';
import { Image } from '@components/htmlTags/img';
import { Logo } from '../logo';
import { ImageBox, LogoBox } from './styles';

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <LogoBox>
          <Logo
            url="/logo.png"
            style={{ objectFit: 'contain', zIndex: 3 }}
          />
        </LogoBox>
        <ImageBox>
          <Image src="banner.png" />
        </ImageBox>
      </Container>
    </Wrapper>
  );
};
