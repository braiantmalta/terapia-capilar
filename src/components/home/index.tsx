import { Container } from '@components/container';
import { Wrapper } from '@components/htmlTags/div';
import { AboutSession } from './aboutSession';
import { HomeContent } from './styles';

export const Home = () => {
  return (
    <Wrapper style={{ backgroundColor: '#6A9B85' }}>
      <Container>
        <HomeContent>
          <AboutSession />
        </HomeContent>
      </Container>
    </Wrapper>
  );
};
