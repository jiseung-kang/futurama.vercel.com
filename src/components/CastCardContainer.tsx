import styled from '@emotion/styled'
import { CastData } from '../types/Cast'
import { CastCard } from './CastCard'
import { useData } from '../hooks/useData'
import { Error, Loading } from '.'
import { Slider } from './layouts/Slider'

export const CastCardContainer = () => {
	const name = 'cast'
	const { data, error } = useData(name, '')

	if (error) return <Error />
	if (!data) return <Loading />

	return (
		<Container>
			<Title>CAST</Title>
			<Decription>Click Card to get MORE INFORMATION</Decription>
			<Slider>
				{data.map((name: CastData) => {
					return <CastCard castData={name} key={`futurama-${name}-${name.id}`} />
				})}
			</Slider>
		</Container>
	)
}

const Container = styled.div`
	text-align: center;
	padding: 0 10% 0 10%;
`
// media query

const Title = styled.h1`
	text-align: center;
`

const Decription = styled.h2`
	color: brown;
	font-size: 20px;
	font-weigth: 500;
	text-align: center;
`
export default CastCardContainer
