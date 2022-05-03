import { styled } from '@mui/system';

export const FormBox = styled('div')({
  position: 'relative',
  bottom: '550px',
  left: '496px',
  zIndex: '4',
});

export const FormContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '450px',
  height: '450px',
  padding: '24px',
  backgroundColor: '#ffffff',
  borderRadius: '5px',
  opacity: 0.9,
  [theme.breakpoints.down('md')]: {
    width: '350px',
    height: 'fit-content',
  },
}));

export const ButtonBox = styled('div')({
  marginTop: '16px',
});
