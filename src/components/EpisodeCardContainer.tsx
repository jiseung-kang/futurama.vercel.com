import styled from '@emotion/styled';
import { EpisodeData } from '../types/Episodes';
import { Error, Loading } from '.';
import { EpisodeCard } from './EpisodeCard';
import { useData } from '../hooks/useData';
import { useState } from 'react';

export const EpisodeCardContainer = () => {
	const name = 'episodes';
	const { data, error } = useData(name, '');

	const [selectedOption, setSelectedOption] = useState('');

	if (error) return <Error />;
	if (!data) return <Loading />;

	const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		setSelectedOption(value);
		console.log(value);
	};

	return (
		<Container>
			<Title>Episode</Title>
			<Select onChange={selectChange}>
				<option value="0">Quick Search</option>
				{data.map((name: EpisodeData) => {
					return (
						<>
							<option value={name.id}>
								{name.number} : {name.title}
							</option>
						</>
					);
				})}
			</Select>
			{data.map((name: EpisodeData) => {
				if (name.id == parseInt(selectedOption)) {
					return <EpisodeCard episodeData={name} key={`futurama-${name}-${name.id}`} />;
				} else {
					return <EpisodeCard episodeData={name} key={`futurama-${name}-${name.id}`} />;
				}
			})}
		</Container>
	);
};

const Container = styled.div`
	margin: 0 auto;
	width: 80%;
`;
// media query

const Title = styled.h1`
	text-align: center;
`;

const Select = styled.select`
	margin: 0 auto;
	width: 80%;
`;

export default EpisodeCardContainer;
