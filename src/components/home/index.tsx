import { Container } from '@components/container';
import { Wrapper } from '@components/htmlTags/div';
import { AboutSession } from './aboutSession';
import { GiftSession } from './giftSession';
import { GiftSessionBox, HomeContent } from './styles';

export const Home = () => {
  return (
    <Wrapper style={{ backgroundColor: '#6A9B85' }}>
      <HomeContent>
        <Container>
          <AboutSession />
        </Container>
        <GiftSessionBox>
          {/* <Container> */}
          <GiftSession />
          {/* </Container> */}
        </GiftSessionBox>
      </HomeContent>
    </Wrapper>
  );
};
