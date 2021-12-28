import styled from '@emotion/styled'
import { QuestionData } from '../types/Questions'
import { Error, Loading } from '.'
import { useData } from '../hooks/useData'
import Link from 'next/link'

export const QuestionCardContainer = () => {
	const name = 'questions'
	const { data, error } = useData(name, '')

	if (error) return <Error />
	if (!data) return <Loading />

	return (
		<Container>
			<h1>Futurama Quiz </h1>
			<Link href="questions/1">
				<a>
					<Go>Go Futurama Quiz</Go>
				</a>
			</Link>
		</Container>
	)
}

const Container = styled.div`
	text-align: center;
`
const Go = styled.p`
width: 200px;
margin: 0 auto;
	font-size: 24px;
	font-weight = 300;
	padding: 20px 20px;
	border: 2px solid darkgrey;
	border-radius: 20px;
	cursor: pointer;
	background-color: green;
	color: white;
`

export default QuestionCardContainer
