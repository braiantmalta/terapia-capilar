import { Button, useMediaQuery } from '@mui/material';

import { Logo } from '@components/layout/logo';
import { Text } from '@components/text';
import { theme } from '@styles/theme';

export const WhatsAppButton = () => {
  const isTabletVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );

  return (
    <Button
      type="button"
      variant="outlined"
      style={{
        backgroundColor: '#075e54',
        width: '250px ',
        borderRadius: '100px',
        height: isTabletVersion ? '40px' : '60px',
      }}
    >
      <Logo
        url="/whatsapp.svg"
        style={{ width: '25px', marginRight: '8px' }}
      />
      <Text
        type={isTabletVersion ? 'h6' : 'h5'}
        color="#ffffff"
      >
        <strong>INGRESSE JÁ</strong>
      </Text>
    </Button>
  );
};
