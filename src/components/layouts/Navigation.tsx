import styled from '@emotion/styled'
import Link from 'next/link'
import { ROUTES } from '../../constants'
styled

interface ROUTE {
	ID: number
	PATH: string
	LABEL: string
}

export const Navigation = () => {
	return (
		<>
			<Title>
				<Link href="/">FUTURAMA</Link>
				<Navi>
					{ROUTES.map((routeObject: ROUTE) => {
						return (
							<li key={`main-menu-${routeObject.ID}`}>
								<Link href={routeObject.PATH}>
									<a>{routeObject.LABEL}</a>
								</Link>
							</li>
						)
					})}
				</Navi>
			</Title>
		</>
	)
}
const Title = styled.h1`
	font-family: 'Rock 3D', cursive;
	text-align: center;
	font-size: 50px;
	color: #eadb14;
	background-color: #aa384d;
	position: sticky;
	top: 0;
	bottom: 80px;
	height: 80px;
	margin: 0px;
	padding: 0;
`

const Navi = styled.nav`
	display: flex;
	justify-content: space-around;
	position: relative;
	font-family: 'Cairo', sans-serif;
	font-size: 20px;
	color: white;
	font-weight: 500;
	background-color: #aa384d;
	li {
		list-style: none;
	}
`
