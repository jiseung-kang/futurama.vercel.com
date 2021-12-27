import styled from '@emotion/styled';
import { QuestionData } from '../types/Questions';
import { Error, Loading } from '.';
import { QuestionCard } from './QuestionCard';
import { useData } from '../hooks/useData';

export const QuestionCardContainer = () => {
	const name = 'questions';
	const { data, error } = useData(name, '');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<Container>
			<h1>Futurama Question</h1>

			{data.map((name: QuestionData) => {
				return <QuestionCard questionData={name} key={`futurama-${name}-${name.id}`} />;
			})}
		</Container>
	);
};

const Container = styled.div`
	text-align: center;
`;
// media query

export default QuestionCardContainer;
