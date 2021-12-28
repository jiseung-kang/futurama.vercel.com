import styled from '@emotion/styled'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Error, Loading } from '../../components'
import { useData } from '../../hooks/useData'

const QuestionDetail: NextPage = () => {
	const router = useRouter()
	const { id } = router.query
	const pathname = 'questions'

	const { data, error } = useData(pathname, id)
	const [selectedOption, setSelectedOption] = useState('')

	const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		let value = parseInt(event.target.value)
		setSelectedOption(possibleAnswers[value - 1])
	}
	useEffect(() => {
		let box = document.querySelector<HTMLDivElement>('Select')
		if (box && selectedOption == correctAnswer) {
			console.log(`You clicked ${selectedOption}`)
			box.style.background = 'green'
			box.style.color = 'white'
			box.style.transform = 'scale(1.5)'
			if (id == '28') {
				location.href = location.origin
				return
			}
			location.href = location.origin + `/${pathname}/` + (parseInt(id + '') + 1)
		} else if (box && selectedOption) {
			box.style.background = 'red'
			box.style.color = 'white'
		}
	})

	if (error) return <Error />
	if (!data) return <Loading />

	const { question, possibleAnswers, correctAnswer } = data

	return (
		<QuestionCard>
			<Question>
				{id}. {question}
			</Question>
			<Select onChange={selectChange}>
				<option value="0">Choose correct Answer</option>
				<option value="1">{data.possibleAnswers[0]}</option>
				<option value="2">{data.possibleAnswers[1]}</option>
				<option value="3">{data.possibleAnswers[2]}</option>
				<option value="4">{data.possibleAnswers[3]}</option>
				<option value="5">{data.possibleAnswers[4]}</option>
				<option value="6">{data.possibleAnswers[5]}</option>
			</Select>
		</QuestionCard>
	)
}

const QuestionCard = styled.div`
	padding: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	li {
		list-style: none;
	}
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
export default QuestionDetail
