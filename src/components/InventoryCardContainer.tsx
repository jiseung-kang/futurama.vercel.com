import styled from '@emotion/styled';
import { InventoryData } from '../types/Inventory';
import { Error, Loading } from '.';
import { InventoryCard } from './InventoryCard';
import { useData } from '../hooks/useData';

export const InventoryCardContainer = () => {
	const name = 'inventory';
	const { data, error } = useData(name, '');

	if (error) return <Error />;
	if (!data) return <Loading />;

	return (
		<Container>
			<Title>INVENTORY</Title>
			{data.map((name: InventoryData) => {
				return <InventoryCard inventoryData={name} key={`futurama-${name}-${name.id}`} />;
			})}
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	text-align: center;
`;
// media query

const Title = styled.h1`
	grid-column: 1/6;
	text-align: center;
`;

export default InventoryCardContainer;
