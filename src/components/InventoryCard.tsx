import styled from '@emotion/styled';
import Link from 'next/link';
import { InventoryData } from '../types/Inventory';

interface InventoryCardProps {
	inventoryData: InventoryData;
}

export const InventoryCard = ({ inventoryData }: InventoryCardProps) => {
	const { id, title, category, description, slogan, price, stock } = inventoryData;

	return (
		<Card>
			<h2>{title}</h2>
			<h3>{category}</h3>
			<p>{description}</p>
			<p>{slogan}</p>
			<p>
				Price: {price} <br />
				Stock: {stock}
			</p>
		</Card>
	);
};

const Card = styled.div`
	padding: 0px 20px;
	line-height: 20px;
`;
