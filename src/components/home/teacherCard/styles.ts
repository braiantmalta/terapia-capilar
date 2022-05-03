import { styled } from '@mui/system';

export const TeacherCardBox = styled('div')({
  width: '235px',
  height: '400px',
});

export const ImageBox = styled('div')({
  height: '280px',
});

export const TextBox = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const TitleMargin = styled('div')(({ theme }) => ({
  margin: '30px 0px 15px',
  [theme.breakpoints.down('sm')]: {
    margin: '16px 0px 8px',
  },
}));
