import { styled } from '@mui/system';

export const HomeContent = styled('div')({});

export const AboutSessionBox = styled('div')(
  ({ theme }) => ({
    // position: 'relative',
    // bottom: 16,
    // maxHeight: '1250px',
    // height: '100%',
    [theme.breakpoints.down('lg')]: {
      // marginTop: '-1px',
      // bottom: -8,
    },
    [theme.breakpoints.down('md')]: {
      // bottom: 20,
      // height: '500px',
    },
    [theme.breakpoints.down('sm')]: {
      // bottom: -146,
      // height: '1250px',
      // height: '1500px',
    },
  }),
);

export const GiftSessionBox = styled('div')(
  ({ theme }) => ({
    // height: 'fit-content',
    // backgroundColor: 'orange',
    [theme.breakpoints.down('md')]: {
      // position: 'relative',
      // top: '150px',
    },
    [theme.breakpoints.down('sm')]: {
      // height: '1500px',
      // bottom: '650px',
      // top: 100,
      // marginTop: '-1200px',
      // height: '300px',
    },
  }),
);

export const NewsLetterBox = styled('div')({
  height: 'fit-content',
  backgroundColor: '#fff',
});
