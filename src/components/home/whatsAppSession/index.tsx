import { Wrapper } from '@components/htmlTags';
import { WhatsAppButton } from '@components/button/whatsAppButton';
import { Text } from '@components/text';
import { useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';
import {
  ButtonBox,
  WhatsAppBox,
  WhatsAppContent,
} from './styles';

export const WhatsAppSession = () => {
  const isTabletVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );

  return (
    <Wrapper>
      <WhatsAppBox>
        <WhatsAppContent>
          <Text type="h2">
            <strong>VAGAS LIMITADAS</strong>
          </Text>
          <ButtonBox>
            <WhatsAppButton />
          </ButtonBox>
        </WhatsAppContent>
      </WhatsAppBox>
    </Wrapper>
  );
};
