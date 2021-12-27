import styled from '@emotion/styled'
import Link from 'next/link'
import { EpisodeData } from '../types/Episodes'

interface EpisodeCardProps {
	episodeData: EpisodeData
}

export const EpisodeCard = ({ episodeData }: EpisodeCardProps) => {
	const { id, number, title, writers, originalAirDate, desc } = episodeData

	return (
		<Card>
			<Link href={`/episodes/${id}`}>
				<a>
					<Title>
						{number} : {title}
					</Title>
					<Description>{desc}</Description>
					<Detail>
						{originalAirDate}, Written by {writers}
					</Detail>
				</a>
			</Link>
		</Card>
	)
}

const Card = styled.div`
	margin: 15px 0;
	line-height: 12px;
	padding: 20px;
	background: white;
	border-radius: 20px;
	text-align: center;
`

const Title = styled.h3`
	font-size: 24px;
	font-weight: 600;
	color: black;
	padding-bottom: 10px;
`

const Description = styled.p`
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
	color: grey;
	padding-bottom: 10px;
`

const Detail = styled.p`
	font-size: 12px;
	font-style: italic;
	color: darkgrey;
`
