import { styled } from '@mui/system';

export const HomeContent = styled('div')({
  // height: 'fit-content',
});

export const AboutSessionBox = styled('div')(
  ({ theme }) => ({
    position: 'relative',
    bottom: 16,
    [theme.breakpoints.down('lg')]: {
      bottom: -8,
    },
    [theme.breakpoints.down('md')]: {
      bottom: 130,
    },
  }),
);

export const GiftSessionBox = styled('div')({
  height: '700px',
});
