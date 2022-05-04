import { styled } from '@mui/system';
import { StyledInput } from '@components/htmlTags';

export const NewsLetterBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#fff',
  width: '100%',
  height: '100%',
});

export const NewLetterContent = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    // position: 'relative',
    // bottom: '-274px',
    [theme.breakpoints.down('sm')]: {
      width: '350px',
      margin: '30px 0px',
      height: '300px',
      // bottom: '-420px',
    },
  }),
);

export const InputBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const TextFieldStyled = styled(StyledInput)({
  fieldset: {
    borderRadius: '50px',
  },
});

export const TextBox = styled('div')({
  margin: '41px 0px 30px',
});

export const ButtonBox = styled('div')(({ theme }) => ({
  marginLeft: '-45px',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0px',
  },
}));
