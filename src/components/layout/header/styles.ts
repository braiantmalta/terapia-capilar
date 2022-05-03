import { styled } from '@mui/system';

export const HeaderContent = styled('div')(({ theme }) => ({
  maxHeight: '1020px',
  height: '1020px',
  width: '100%',
  backgroundColor: '#6A9B85',
  [theme.breakpoints.down('lg')]: {
    height: '720px',
  },
  // [theme.breakpoints.down('md')]: {
  //   heigth: '480px',
  // },
}));

export const LogoBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  height: '150px',
  [theme.breakpoints.down('md')]: {
    height: '80px',
  },
}));

export const ImageBox = styled('div')({
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
});

export const BannerImage = styled('img')(({ theme }) => ({
  zIndex: 1,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  [theme.breakpoints.down('md')]: {
    height: '800px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '600px',
  },
}));

export const TextIntroBox = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '72px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
  },
}));

export const MainContent = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
