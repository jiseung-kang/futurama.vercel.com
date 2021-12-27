import styled from '@emotion/styled'
import Link from 'next/link'
import { CastData } from '../types/Cast'

interface CastCardProps {
	castData: CastData
}

export const CastCard = ({ castData }: CastCardProps) => {
	const { id, name, born, died, bio } = castData

	return (
		<Card>
			<Link href={bio.url}>
				<a>
					<Name>{name}</Name>
					<Life>
						{born}~{died}
					</Life>
				</a>
			</Link>
		</Card>
	)
}

const Card = styled.div`
	line-height: 15px;
	padding: 40px;
	background-color: white;
	margin: 10px;
	border-radius: 20px;
`

const Name = styled.h3`
	font-weight: 700;
`

const Life = styled.p`
	font-style: italic;
	font-size: 15px;
	line-height: 12px;
`
