import { styled } from '@mui/system';

export const GiftSessionBox = styled('div')({
  //height here?
  // backgroundColor: '#fff',
  position: 'relative',
  top: 50,
  zIndex: 2,
  // opacity: 0.9,
});

export const AvatarSessionBox = styled('div')(
  ({ theme }) => ({
    // padding: '80px 0px 0px',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '160px',
    position: 'relative',
    top: 155,
    // height: '255px',
    // backgroundColor: '#fff',
    [theme.breakpoints.down('lg')]: {
      // gap: '10px',
      // top: '-540px',
    },
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      gap: '0px',
      top: '100px',
      // padding: '00px 0px 0px',
    },
    [theme.breakpoints.down('sm')]: {
      //shape img settings
      flexDirection: 'column',
      // top: '0px',
    },
  }),
);

export const ImageBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const TextBox = styled('div')({
  display: 'flex',
  width: '300px',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const ImageStyled = styled('img')(({ theme }) => ({
  zIndex: 1,
  width: '100%',
  height: '100%',
  position: 'relative',
  top: -550,
  opacity: 1,
  [theme.breakpoints.down('lg')]: {
    top: -800,
    // height: '800px',
  },
  [theme.breakpoints.down('md')]: {
    // height: '800px',
  },
  [theme.breakpoints.down('sm')]: {
    // height: '800px',
  },
}));

export const TextContentBox = styled('div')({
  margin: '33px 0px 40px',
});

export const InviteSessionBox = styled('div')(
  ({ theme }) => ({
    // margin: '80px 0px',
    position: 'relative',
    top: 700,
    [theme.breakpoints.down('lg')]: {
      // margin: '180px 0px',
      // margin: '-70px 0px',
      height: '500px',
    },
    // [theme.breakpoints.down('md')]: {

    // },
  }),
);
