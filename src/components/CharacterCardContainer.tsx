import styled from '@emotion/styled'
import { CharacterData } from '../types/Characters'
import { CharacterCard } from './CharacterCard'
import { useData } from '../hooks/useData'
import { Error, Loading } from '.'
import { Slider } from './layouts/Slider'

export const CharacterCardContainer = () => {
	const name = 'characters'
	const { data, error } = useData(name, '')

	if (error) return <Error />
	if (!data) return <Loading />

	return (
		<Container>
			<Title>CHARACTERS</Title>
			<Decription>Click Card to get MORE INFORMATION</Decription>

			<Slider>
				{data.map((name: CharacterData) => {
					return <CharacterCard characterData={name} key={`futurama-${name}-${name.id}`} />
				})}
			</Slider>
		</Container>
	)
}

const Container = styled.div`
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

export default CharacterCardContainer
