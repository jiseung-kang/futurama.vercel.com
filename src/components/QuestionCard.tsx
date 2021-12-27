import styled from '@emotion/styled';
import Link from 'next/link';
import { QuestionData } from '../types/Questions';

interface QuestionCardProps {
	questionData: QuestionData;
}

export const QuestionCard = ({ questionData }: QuestionCardProps) => {
	const { id, question, possibleAnswers, correctAnswer } = questionData;

	return (
		<Card>
			<Question>{question}</Question>
			<Select>
				<option value="1">{possibleAnswers[0]}</option>
				<option value="2">{possibleAnswers[1]}</option>
				<option value="3">{possibleAnswers[2]}</option>
				<option value="4">{possibleAnswers[3]}</option>
			</Select>
			<p>{correctAnswer}</p>
		</Card>
	);
};

const Card = styled.div`
	text-align: center;
`;

const Question = styled.h3`
	font-weight: 600;
`;

const Select = styled.select`
	text-align: center;
	width: 150px;
	height: 35px;
	background: white;
	color: gray;
	padding-left: 5px;
	font-size: 14px;
	margin-left: 10px;
`;
