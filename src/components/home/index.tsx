import { Container } from '@components/container';
import { Wrapper } from '@components/htmlTags/div';
import { AboutSession } from './aboutSession';
import { GiftSession } from './giftSession';
import { GiftSessionBox, HomeContent } from './styles';
import { Subscribe } from './subsribe';

export const Home = () => {
  return (
    <Wrapper style={{ backgroundColor: '#6A9B85' }}>
      <HomeContent>
        <Container>
          <AboutSession />
        </Container>
        <GiftSessionBox>
          <GiftSession />
        </GiftSessionBox>
      </HomeContent>
      <Subscribe />
    </Wrapper>
  );
};
