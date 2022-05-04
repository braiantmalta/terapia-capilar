import { Container } from '@components/container';
import { StyledButton } from '@components/htmlTags/button';
import { Wrapper } from '@components/htmlTags/div';
import { Image } from '@components/htmlTags/img';
import { Text } from '@components/text';
import { useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';
import { InviteSession } from '../inviteSession';
import {
  AvatarSessionBox,
  GiftSessionBox,
  ImageBox,
  ImageStyled,
  InviteSessionBox,
  TextBox,
  TextContentBox,
} from './styles';

export const GiftSession = () => {
  const isTabletVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );

  return (
    <Wrapper>
      <GiftSessionBox>
        <Container>
          <AvatarSessionBox>
            <ImageBox>
              <Image
                src="shape.png"
                width={isTabletVersion ? '50%' : '100%'}
              />
            </ImageBox>
            <TextBox>
              <Text type={isTabletVersion ? 'h5' : 'h3'}>
                <strong>BRINDE</strong>
              </Text>
              <TextContentBox>
                <Text type={isTabletVersion ? 'h4' : 'h3'}>
                  <strong>
                    CÂMERA
                    <br />
                    CAPILAR
                  </strong>
                </Text>
              </TextContentBox>
              <StyledButton
                backgroundColor="#6A9B85"
                color="#ffffff"
              />
            </TextBox>
          </AvatarSessionBox>
        </Container>

        <InviteSessionBox>
          <InviteSession />
        </InviteSessionBox>
      </GiftSessionBox>
      <ImageStyled src="wave_1.png" />
    </Wrapper>
  );
};
