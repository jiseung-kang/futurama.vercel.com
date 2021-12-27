import styled from '@emotion/styled'
import { QuestionData } from '../types/Questions'
import { Error, Loading } from '.'
import { QuestionCard } from './QuestionCard'
import { useData } from '../hooks/useData'

export const QuestionCardContainer = () => {
	const name = 'questions'
	const { data, error } = useData(name, '')

	if (error) return <Error />
	if (!data) return <Loading />

	return (
		<Container>
			<h1>Futurama Quiz </h1>
			<Quiz>
				{data.map((name: QuestionData) => {
					return <QuestionCard questionData={name} key={`futurama-${name}-${name.id}`} />
				})}
			</Quiz>
		</Container>
	)
}

const Container = styled.div`
	text-align: center;
`

const Quiz = styled.div`
	text-align: center;
	width: 80%;
	margin: 0 auto;
	background: white;
	border-radius: 20px;
	height: 300px;
	overflow-y: scroll;
`
// media query

export default QuestionCardContainer
