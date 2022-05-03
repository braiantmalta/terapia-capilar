import { styled } from '@mui/system';

export const HomeContent = styled('div')({
  // height: 'fit-content',
});

export const AboutSessionBox = styled('div')(
  ({ theme }) => ({
    position: 'relative',
    bottom: 16,
    [theme.breakpoints.down('lg')]: {
      marginTop: '-1px',
      bottom: -8,
    },
    [theme.breakpoints.down('md')]: {
      bottom: 130,
      height: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      bottom: 130,
      height: '850px',
    },
  }),
);

export const GiftSessionBox = styled('div')(
  ({ theme }) => ({
    height: '700px',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: '150px',
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: '150px',
    },
  }),
);
