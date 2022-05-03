import { Text } from '@components/text';
import { Button, useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';

type StyledButtonProps = {
  title?: string;
  backgroundColor?: '#ffffff' | '#6A9B85';
  color?: '#ffffff' | '#6A9B85';
};

export const StyledButton = ({
  title = 'SAIBA MAIS',
  backgroundColor = '#ffffff',
  color = '#6A9B85',
}: StyledButtonProps) => {
  const isTabletVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );

  return (
    <Button
      type="button"
      variant="contained"
      size="large"
      style={{
        borderRadius: '100px',
        backgroundColor: backgroundColor,

        width: isTabletVersion ? '200px' : '250px',
        height: isTabletVersion ? '40px' : '60px',
      }}
    >
      <Text
        type={isTabletVersion ? 'h6' : 'h5'}
        color={color}
      >
        <strong>{title}</strong>
      </Text>
    </Button>
  );
};
