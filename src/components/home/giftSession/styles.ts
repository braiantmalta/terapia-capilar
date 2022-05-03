import { styled } from '@mui/system';

export const ImageBox = styled('div')({});

export const GiftSessionBox = styled('div')(
  ({ theme }) => ({
    marginBottom: '280px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '160px',
    position: 'relative',
    top: '-685px',
    [theme.breakpoints.down('lg')]: {
      top: '-540px',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      top: '-150px',
      gap: 0,
    },
  }),
);

export const TextBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const TextContentBox = styled('div')({
  margin: '33px 0px 40px',
});

export const FooterText = styled('div')(({ theme }) => ({
  position: 'relative',
  top: '-430px',
  margin: 'auto',
  width: '600px',
  [theme.breakpoints.down('lg')]: {
    top: '-650px',
  },
}));
