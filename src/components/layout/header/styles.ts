import { styled } from '@mui/system';

export const HeaderContent = styled('div')(({ theme }) => ({
  height: '1020px',
  width: '100%',
  backgroundColor: '#6A9B85',
  [theme.breakpoints.down('lg')]: {
    height: '720px',
  },
}));

export const LogoBox = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  height: '150px',
});

export const ImageBox = styled('div')({
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
});

export const TextIntroBox = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
  },
}));
