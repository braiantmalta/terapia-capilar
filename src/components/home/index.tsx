import { Wrapper } from '@components/htmlTags/div';
import { AboutSession } from './aboutSession';
import { GiftSession } from './giftSession';
import {
  AboutSessionBox,
  GiftSessionBox,
  NewsLetterBox,
  WhatsAppBox,
} from './styles';
import { NewsLetter } from './newsLetter';
import { WhatsAppSession } from './whatsAppSession';

export const Home = () => {
  return (
    <Wrapper style={{ backgroundColor: '#6A9B85' }}>
      <AboutSessionBox>
        <AboutSession />
      </AboutSessionBox>

      <GiftSessionBox>
        <GiftSession />
      </GiftSessionBox>

      <WhatsAppBox>
        <WhatsAppSession />
      </WhatsAppBox>

      <NewsLetterBox>
        <NewsLetter />
      </NewsLetterBox>
    </Wrapper>
  );
};
