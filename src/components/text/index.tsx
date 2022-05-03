import { CSSProperties, ReactNode } from 'react';
import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { theme } from '@styles/theme';

type TextProps = {
  children?: ReactNode;
  type?:
    | 'body1'
    | 'body2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption';
  style?: CSSProperties;
  sx?: SxProps;
  secondary?: boolean;
  textAlign?:
    | 'center'
    | 'right'
    | 'left'
    | 'inherit'
    | 'justify';
  color?: '#6A9B85' | '#ffffff' | any;
};

export const Text = ({
  children,
  type,
  style,
  sx,
  secondary = false,
  textAlign,
  color = '#6A9B85',
}: TextProps) => (
  <Typography
    align={textAlign}
    variant={type}
    style={{
      ...style,
      color: color,
    }}
    sx={sx}
    color={
      secondary ? theme.palette.text.secondary : undefined
    }
  >
    {children}
  </Typography>
);
