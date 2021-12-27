import styled from '@emotion/styled';
import { CastData } from '../types/Cast';
import { CastCard } from './CastCard';
import { useData } from '../hooks/useData';
import { Error, Loading } from '.';
import { Slider } from './layouts/slider';

export const CastCardContainer = () => {
	const name = 'cast';
	const { data, error } = useData(name, '');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<Container>
			<Title>CAST</Title>
			{data.map((name: CastData) => {
				return <CastCard castData={name} key={`futurama-${name}-${name.id}`} />;
			})}
		</Container>
	);
};

const Container = styled.div`
	text-align: center;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;
// media query

const Title = styled.h1`
	grid-column: 1/4;
	text-align: center;
`;

export default CastCardContainer;
