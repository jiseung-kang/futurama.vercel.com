import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { QuestionData } from '../types/Questions'

interface QuestionCardProps {
	questionData: QuestionData
}

export const QuestionCard = ({ questionData }: QuestionCardProps) => {
	const { id, question, possibleAnswers, correctAnswer } = questionData
	const [selectedOption, setSelectedOption] = useState('')

	const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		let value = parseInt(event.target.value)
		setSelectedOption(possibleAnswers[value - 1])
	}
	useEffect(() => {
		let box = document.querySelector<HTMLDivElement>('Select')
		if (box && box.parentElement && selectedOption == correctAnswer) {
			box.parentElement.removeChild(box)
			console.log(`You clicked ${selectedOption}`)
		}

		// box?.parentElement.remove(Children)
	})

	return (
		<Card>
			<Question>
				<div>
					{id}. {question}
				</div>
			</Question>
			<Select onChange={selectChange}>
				<option value="0">Choose correct Answer</option>
				<option value="1">{questionData.possibleAnswers[0]}</option>
				<option value="2">{questionData.possibleAnswers[1]}</option>
				<option value="3">{questionData.possibleAnswers[2]}</option>
				<option value="4">{questionData.possibleAnswers[3]}</option>
				<option value="5">{questionData.possibleAnswers[4]}</option>
				<option value="6">{questionData.possibleAnswers[5]}</option>
			</Select>
		</Card>
	)
}

const Card = styled.div`
	text-align: center;
`

const Question = styled.h3`
	font-weight: 600;
`

const Select = styled.select`
	text-align: center;
	width: 250px;
	height: 35px;
	background: white;
	color: gray;
	padding-left: 5px;
	font-size: 14px;
	margin-left: 10px;
`
