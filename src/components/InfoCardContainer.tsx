import styled from '@emotion/styled'
import { InfoData } from '../types/Info'
import { Error, Loading } from '.'
import { InfoCard } from './InfoCard'
import { useData } from '../hooks/useData'
import Link from 'next/link'

export const InfoCardContainer = () => {
	const name = 'info'
	const { data, error } = useData(name, '')

	if (error) return <Error />
	if (!data) return <Loading />

	return (
		<Container>
			<Title>SYNOPSIS</Title>
			{data.map((name: InfoData) => {
				return <InfoCard infoData={name} key={`futurama-${name}-${name.id}`} />
			})}
		</Container>
	)
}

const Container = styled.div`
	padding: 0 10% 0 10%;
`
// media query

const Title = styled.h1`
	text-align: center;
`
export default InfoCardContainer
