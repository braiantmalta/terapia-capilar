import { CSSProperties, ReactNode } from 'react';
import { Container as MuiContainer } from '@mui/material';

type ContainerProps = {
  style?: CSSProperties;
  sx?: CSSProperties;
  children: ReactNode;
};

export const Container = ({
  style,
  sx,
  children,
}: ContainerProps) => (
  <MuiContainer sx={sx} style={style}>
    {children}
  </MuiContainer>
);
