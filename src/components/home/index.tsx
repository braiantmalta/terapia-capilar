import { Wrapper } from '@components/htmlTags/div';
import { AboutSession } from './aboutSession';
import { GiftSession } from './giftSession';
import {
  AboutSessionBox,
  GiftSessionBox,
  NewsLetterBox,
} from './styles';
import { NewsLetter } from './newsLetter';

export const Home = () => {
  return (
    <Wrapper style={{ backgroundColor: '#6A9B85' }}>
      <AboutSessionBox>
        <AboutSession />
      </AboutSessionBox>

      <GiftSessionBox>
        <GiftSession />
      </GiftSessionBox>

      <NewsLetterBox>
        <NewsLetter />
      </NewsLetterBox>
    </Wrapper>
  );
};
