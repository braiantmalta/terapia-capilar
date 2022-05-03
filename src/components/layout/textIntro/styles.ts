import { styled } from '@mui/system';

export const TextBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: 3,
  [theme.breakpoints.down('md')]: {
    bottom: 55,
  },
  [theme.breakpoints.down('sm')]: {
    bottom: 75,
  },
}));

export const ButtonBox = styled('div')(({ theme }) => ({
  marginTop: '50px',
  [theme.breakpoints.down('md')]: {
    marginTop: '30px',
  },
}));
