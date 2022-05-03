import { Container } from '@components/container';
import { Wrapper } from '@components/htmlTags/div';
import { Text } from '@components/text';
import { Teachers } from '@utils/constants/teachers';
import { TeacherCard } from '../teacherCard';
import {
  AboutSessionContent,
  TeachersBox,
  TextBox,
} from './styles';

export const AboutSession = () => {
  return (
    <Wrapper>
      <Container>
        <AboutSessionContent>
          <Text type="h2" color="#ffffff">
            <strong>SOBRE O CURSO</strong>
          </Text>
          <TextBox>
            <Text
              type="h4"
              color="#ffffff"
              textAlign="center"
            >
              A Formação Terapia Capilar, foi desenvolvida
              com objetivo de introduzir profissionais do
              universo da Terapia Capilar, Tricologia e
              Aromaterapia, oferecendo embasamento
              técnico-científico e ferramentas de avaliação
            </Text>
          </TextBox>
          <TeachersBox>
            {Teachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                image={teacher.image}
                name={teacher.name}
                subtitle={teacher.subtitle}
              />
            ))}
          </TeachersBox>
        </AboutSessionContent>
      </Container>
    </Wrapper>
  );
};
