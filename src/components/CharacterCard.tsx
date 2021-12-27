import styled from '@emotion/styled'
import Link from 'next/link'
import { CharacterData } from '../types/Characters'

interface CharacterCardProps {
	characterData: CharacterData
}

export const CharacterCard = ({ characterData }: CharacterCardProps) => {
	const { id, name, images, gender, species, homePlanet, occupation, sayings, age } = characterData

	return (
		<Card>
			<Link href={`/characters/${id}`}>
				<a>
					<Profile src={images.main} />
					<Info>
						{name.first} {name.middle} {name.last}
						{/* <Saying>{sayings[0]}</Saying> */}
					</Info>
				</a>
			</Link>
		</Card>
	)
}

const Card = styled.div`
	width: 100%;
	background-color: white;
	text-align: center;
	border: 0.5px solid darkgrey;
	border-radius: 20px;
	padding: 15px;
	margin: 10px;
`

const Info = styled.p`
	padding-left: 5px;
	font-size: 15px;
	font-weight: 500;
	line-height: 15px;
`

const Saying = styled.p`
	font-weight: 300;
`

const Profile = styled.img`
	width: 100px;
	aspect-ratio: 9 / 16;
`
