import { styled } from '@mui/system';

export const AboutSessionContent = styled('div')({
  display: 'flex',
  height: 'content-fit',
  flexDirection: 'column',
  alignItems: 'center',
});

export const TextBox = styled('div')(({ theme }) => ({
  width: '1000px',
  marginTop: '17px',
  [theme.breakpoints.down('md')]: {
    width: '700px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '350px',
  },
}));

export const TeachersBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '220px',
  margin: '30px',
  [theme.breakpoints.down('md')]: {
    gap: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '8px',
  },
}));
