import styled from '@emotion/styled'
import { InventoryData } from '../types/Inventory'
import { Error, Loading } from '.'
import { InventoryCard } from './InventoryCard'
import { useData } from '../hooks/useData'
import { Slider } from './layouts/slider'

export const InventoryCardContainer = () => {
	const name = 'inventory'
	const { data, error } = useData(name, '')

	if (error) return <Error />
	if (!data) return <Loading />

	return (
		<Container>
			<Title>INVENTORY</Title>
			<Slider>
				{data.map((name: InventoryData) => {
					return <InventoryCard inventoryData={name} key={`futurama-${name}-${name.id}`} />
				})}
			</Slider>
		</Container>
	)
}

const Container = styled.div`
	text-align: center;
	padding: 0 10% 0 10%;
	overflow-wrap: break-word;
`
// media query

const Title = styled.h1`
	text-align: center;
`

export default InventoryCardContainer
