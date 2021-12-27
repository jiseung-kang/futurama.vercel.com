import styled from '@emotion/styled';
import { CharacterData } from '../types/Characters';
import { CharacterCard } from './CharacterCard';
import { useData } from '../hooks/useData';
import { Error, Loading } from '.';

export const CharacterCardContainer = () => {
	const name = 'characters';
	const { data, error } = useData(name, '');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<Container>
			<Title>CHARACTERS</Title>
			<Decription>Click Card to get MORE INFORMATION</Decription>
			{data.map((name: CharacterData) => {
				return <CharacterCard characterData={name} key={`futurama-${name}-${name.id}`} />;
			})}
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;
// media query

const Title = styled.h1`
	grid-column: 1/4;
	text-align: center;
`;

const Decription = styled.h2`
	grid-column: 1/4;
	color: brown;
	font-size: 20px;
	font-weigth: 500;
	text-align: center;
`;

export default CharacterCardContainer;
