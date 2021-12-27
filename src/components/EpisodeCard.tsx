import styled from '@emotion/styled';
import { EpisodeData } from '../types/Episodes';

interface EpisodeCardProps {
	episodeData: EpisodeData;
}

export const EpisodeCard = ({ episodeData }: EpisodeCardProps) => {
	const { id, number, title, writers, originalAirDate, desc } = episodeData;

	return (
		<Card>
			<Number>{number}</Number>
			<Title>{title}</Title>
			<Date>{originalAirDate}</Date>
			<Description>{desc}</Description>
			<Writer>{writers}</Writer>
		</Card>
	);
};

const Card = styled.div`
	line-height: 12px;
	padding: 0px 20px;
`;

const Number = styled.h2`
	font-size: 20px;
	font-weight: 700;
`;

const Title = styled.h3`
	font-size: 20px;
	font-weight: 600;
	line-height: 20px;
`;

const Date = styled.p`
	font-size: 12px;
`;

const Description = styled.p`
	font-size: 14px;
	line-height: 14px;
`;

const Writer = styled.p`
	font-size: 12px;
`;
