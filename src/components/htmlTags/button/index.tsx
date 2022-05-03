import { Text } from '@components/text';
import { Button, useMediaQuery } from '@mui/material';
import { theme } from '@styles/theme';
import { CSSProperties, ReactNode } from 'react';

type StyledButtonProps = {
  title?: string;
  backgroundColor?: '#ffffff' | '#6A9B85';
  color?: '#ffffff' | '#6A9B85';
  children?: ReactNode;
  sx?: CSSProperties;
  height?: string;
  type?: 'button' | 'reset' | 'submit' | undefined;
};

export const StyledButton = ({
  title = 'SAIBA MAIS',
  backgroundColor = '#ffffff',
  color = '#6A9B85',
  children,
  sx,
  height,
  type,
}: StyledButtonProps) => {
  const isTabletVersion = useMediaQuery(
    theme.breakpoints.down('md'),
  );

  return (
    <Button
      type={type}
      variant="contained"
      size="large"
      style={{
        borderRadius: '100px',
        backgroundColor: backgroundColor,
        width: isTabletVersion ? '200px' : '250px',
        height: height
          ? height
          : isTabletVersion
          ? '40px'
          : '60px',
      }}
      sx={sx}
    >
      <Text
        type={isTabletVersion ? 'h6' : 'h5'}
        color={color}
      >
        {title ? <strong>{title}</strong> : children}
      </Text>
    </Button>
  );
};
