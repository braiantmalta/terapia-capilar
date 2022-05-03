import { Container } from '@components/container';
import { Wrapper } from '@components/htmlTags/div';
import { Image } from '@components/htmlTags/img';
import { MainForm } from '@components/mainForm';
import { useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';
import { Logo } from '../logo';
import { TextIntro } from '../textIntro';
import {
  ImageBox,
  HeaderContent,
  LogoBox,
  TextIntroBox,
  MainContent,
} from './styles';

export const Header = () => {
  const isTabletVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );

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
              sx={{
                zIndex: 1,
                width: '100%',
                height: isTabletVersion ? '600px' : '100%',
                objectFit: 'cover',
              }}
            />
          </ImageBox>

          <MainContent>
            <TextIntroBox>
              <TextIntro />
            </TextIntroBox>
            <MainForm />
          </MainContent>
        </Container>
      </HeaderContent>
    </Wrapper>
  );
};
