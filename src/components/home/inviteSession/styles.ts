import { styled } from '@mui/system';

export const TextContentBox = styled('div')({
  margin: '33px 0px 40px',
});

export const FooterText = styled('div')(({ theme }) => ({
  // padding: '250px 0px',
  // position: 'relative',
  // top: '-430px',
  margin: 'auto',
  width: '600px',
  [theme.breakpoints.down('lg')]: {
    // top: '-650px',
  },
}));
