import styled from '@emotion/styled'
import { EpisodeData } from '../types/Episodes'
import { Error, Loading } from '.'
import { EpisodeCard } from './EpisodeCard'
import { useData } from '../hooks/useData'
import { useState } from 'react'

export const EpisodeCardContainer = () => {
	const name = 'episodes'
	const { data, error } = useData(name, '')

	const [selectedOption, setSelectedOption] = useState('')

	if (error) return <Error />
	if (!data) return <Loading />

	const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value
		setSelectedOption(value)
	}

	return (
		<Container>
			<Title>Episode</Title>
			<Select onChange={selectChange}>
				<option value="-1">Quick Search</option>
				<option value="0">See All Episodes</option>
				{data.map((name: EpisodeData) => {
					return (
						<>
							<option value={name.id}>
								{name.number} : {name.title}
							</option>
						</>
					)
				})}
			</Select>
			{data.map((name: EpisodeData) => {
				if (selectedOption == '0') {
					return <EpisodeCard episodeData={name} key={`futurama-${name}-${name.id}`} />
				}
				if (name.id == parseInt(selectedOption)) {
					return <EpisodeCard episodeData={name} key={`futurama-${name}-${name.id}`} />
				}
			})}
		</Container>
	)
}

const Container = styled.div`
	margin: 0 auto;
	width: 80%;
	display: flex;
	flex-direction: column;
`
// media query

const Title = styled.h1`
	text-align: center;
`

const Select = styled.select`
	margin: 0 auto;
	width: 100%;
	height: 50px;
	text-align: center;
`

export default EpisodeCardContainer
