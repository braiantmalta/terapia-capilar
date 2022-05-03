import { styled } from '@mui/system';
import { IconButton as MuiIconButton } from '@mui/material';

export const FooterWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});
export const FooterImage = styled('div')({
  display: 'flex',
  marginBottom: '-4px',
});

export const FooterContent = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: '#111111',
  width: '100%',
  height: '400px',
});

export const TextBox = styled('div')({
  width: '400px',
});

export const ContentBox = styled('div')({
  margin: '16px 0px',
});

export const IconsBox = styled('div')({
  display: 'flex',
  gap: '18px',
});

export const IconButton = styled(MuiIconButton)({
  backgroundColor: 'white',
  ':hover': {
    backgroundColor: '#414a4c',
  },
});
