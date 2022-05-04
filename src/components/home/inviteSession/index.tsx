import { Text } from '@components/text';
import { useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';
import { FooterText, TextContentBox } from './styles';

export const InviteSession = () => {
  const isTabletVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );
  return (
    <FooterText>
      <Text
        type={isTabletVersion ? 'h4' : 'h3'}
        color="#ffffff"
        textAlign="center"
      >
        O FUTURO DOS SALÕES
      </Text>
      <TextContentBox>
        <Text
          type={isTabletVersion ? 'h6' : 'h5'}
          color="#ffffff"
          textAlign="center"
        >
          Venha se tornar um terapeuta capilar, e faça parte
          da nova tendência de profissionais naturalistas,
          que além da beleza dos fios se preocupam também
          com a saude
        </Text>
      </TextContentBox>
    </FooterText>
  );
};
