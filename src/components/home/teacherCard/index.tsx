import { Wrapper } from '@components/htmlTags/div';
import { Image } from '@components/htmlTags/img';
import { Text } from '@components/text';
import {
  ImageBox,
  TeacherCardBox,
  TextBox,
  TitleMargin,
} from './styles';

type TeacherCardProps = {
  image?: string;
  name?: string;
  subtitle?: string;
};

export const TeacherCard = ({
  image,
  name,
  subtitle,
}: TeacherCardProps) => {
  return (
    <Wrapper>
      <TeacherCardBox>
        <ImageBox>
          <Image src={image} />
        </ImageBox>
        <TextBox>
          <TitleMargin>
            <Text
              type="h5"
              color="#ffffff"
              textAlign="center"
            >
              {name}
            </Text>
          </TitleMargin>
          <Text
            type="subtitle1"
            color="#ffffff"
            textAlign="center"
          >
            {subtitle}
          </Text>
        </TextBox>
      </TeacherCardBox>
    </Wrapper>
  );
};
