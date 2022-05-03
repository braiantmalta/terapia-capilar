import { styled } from '@mui/system';
import { StyledInput } from '@components/htmlTags';

export const NewsLetterBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const NewLetterContent = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    bottom: '-474px',
    [theme.breakpoints.down('lg')]: {
      bottom: '-420px',
    },
  }),
);

export const InputBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

export const TextFieldStyled = styled(StyledInput)({
  fieldset: {
    borderRadius: '50px',
  },
});

export const TextBox = styled('div')({
  margin: '41px 0px 30px',
});

export const ButtonBox = styled('div')({
  marginLeft: '-45px',
});
