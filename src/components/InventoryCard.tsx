import styled from '@emotion/styled'
import Link from 'next/link'
import { InventoryData } from '../types/Inventory'

interface InventoryCardProps {
	inventoryData: InventoryData
}

export const InventoryCard = ({ inventoryData }: InventoryCardProps) => {
	const { id, title, category, description, slogan, price, stock } = inventoryData

	return (
		<Card key={`{id}-inventory`}>
			<h2>{category}</h2>
			<h3>{title}</h3>
			<Description>{description}</Description>
			<Slogan>{slogan}</Slogan>
			<Price>{price}$</Price>
			<Stock>
				Stock
				<br />
				{stock}
			</Stock>
		</Card>
	)
}

const Card = styled.div`
	line-height: 20px;
	padding: 20px;
	background-color: white;
	margin: 10px;
	border-radius: 20px;
	display: inline-block;

	h2 {
		font-size: 14px;
		font-weight: 600;
		height: 50px;
	}

	h3 {
		font-weight: 700;
		height: 100px;
	}
`
const Description = styled.p`
	font-style: italic;
	font-size: 14px;
	height: 100px;
	overflow-y: scroll;
	background-color: yellow;
	margin: 5px;
`

const Slogan = styled.p`
	font-style: italic;
	font-size: 14px;
	height: 100px;
	overflow-y: scroll;
	background-color: pink;
`

const Price = styled.div`
	line-height: 20px;
	color: black;
	font-weight: 700;
`

const Stock = styled.div`
	line-height: 20px;
	color: brown;
	font-weight: 700;
`
