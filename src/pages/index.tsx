import type { NextPage } from 'next'
import Head from 'next/head'
import styled from '@emotion/styled'
import { InfoCardContainer } from '../components/InfoCardContainer'
import { CharacterCardContainer } from '../components/CharacterCardContainer'
import { EpisodeCardContainer } from '../components/EpisodeCardContainer'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Futurama : The Animations</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<main>
				<InfoCardContainer />
				<CharacterCardContainer />
				<EpisodeCardContainer />
			</main>
		</div>
	)
}

export default Home
