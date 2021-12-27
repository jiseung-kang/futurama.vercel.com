import styled from '@emotion/styled'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Error, Loading } from '../../components'
import { useData } from '../../hooks/useData'

const EpisodeDetail: NextPage = () => {
	const router = useRouter()
	const { id } = router.query
	const pathname = 'episodes'

	const { data, error } = useData(pathname, id)

	if (error) return <Error />
	if (!data) return <Loading />

	const { number, title, writers, originalAirDate, desc } = data

	return (
		<EpisodeDetailCard>
			<Info>
				<ul>
					<li>
						{originalAirDate}, {writers}
					</li>
					<h2>
						{number} : {title}
					</h2>
					<li>{desc}</li>
				</ul>
			</Info>
		</EpisodeDetailCard>
	)
}

const EpisodeDetailCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Info = styled.div`
	padding-top: 30px;
	display: flex;
	ul {
		padding: 20px 20px;
		font-size: 18px;
		font-weight: 500;
		display: flex;
		flex-direction: column;
	}
	ul li {
		list-style: none;
	}
`

const Description = styled.div`
	font-style: italic;
	padding-top: 20px;
	text-align: center;
	p {
		background: white;
		border-radius: 20px;
		width: 80%;
		margin: 10px auto;
	}
`

export default EpisodeDetail
