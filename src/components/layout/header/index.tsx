import { Container } from '@components/container';
import { Wrapper } from '@components/htmlTags/div';
import { Image } from '@components/htmlTags/img';
import { Logo } from '../logo';
import { TextIntro } from '../textIntro';
import { ImageBox, HeaderContent, LogoBox } from './styles';

export const Header = () => {
  return (
    <Wrapper>
      <HeaderContent>
        <Container>
          <LogoBox>
            <Logo
              url="/logo.png"
              style={{ objectFit: 'contain', zIndex: 3 }}
            />
          </LogoBox>
          <ImageBox>
            <Image
              src="banner.png"
              sx={{ zIndex: 1, width: '100%' }}
            />
          </ImageBox>
          <TextIntro />
        </Container>
      </HeaderContent>
    </Wrapper>
  );
};
