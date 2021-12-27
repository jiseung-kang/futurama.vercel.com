import styled from '@emotion/styled'
import { InfoData } from '../types/Info'

interface InfoCardProps {
	infoData: InfoData
}

export const InfoCard = ({ infoData }: InfoCardProps) => {
	const { id, synopsis, yearsAired, creators } = infoData

	return (
		<Card>
			<h3>{yearsAired}</h3>
			<Synopsis>{synopsis}</Synopsis>
			<h3>Creators</h3>
			<Creator>
				<a href={creators[0].url}>{creators[0].name} | </a>
				<a href={creators[1].url}>{creators[1].name}</a>
			</Creator>
		</Card>
	)
}

const Card = styled.p`
	text-align: center;
`

const Synopsis = styled.p`
	padding: 5%;
	background: white;
	border-radius: 20px;
	line-height: 30px;
	font-weight: 300;
`

const Creator = styled.p`
	background: white;
	border-radius: 20px;
	padding: 20px 40px;
	line-height: 15px;
	font-weight: 500;
`
