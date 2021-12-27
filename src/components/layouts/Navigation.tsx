import styled from '@emotion/styled';
import Link from 'next/link';
import { ROUTES } from '../../constants';
styled;
import { boxMouseOverHandler, boxMouseOutHandler } from '../../utils/mouseHandle';

interface ROUTE {
	ID: number;
	PATH: string;
	LABEL: string;
}

export const Navigation = () => {
	return (
		<>
			<Title>
				<Link href="/">FUTURAMA</Link>
			</Title>
			<Navi>
				<Box onMouseOver={boxMouseOverHandler} onMouseOut={boxMouseOutHandler}>
					<Menu className="btn-menu">Menu</Menu>
					<List className="lst-menu">
						{ROUTES.map((routeObject: ROUTE) => {
							return (
								<li key={`main-menu-${routeObject.ID}`}>
									<Link href={routeObject.PATH}>
										<a>{routeObject.LABEL}</a>
									</Link>
								</li>
							);
						})}
					</List>
				</Box>
			</Navi>
		</>
	);
};

const Box = styled.div`
	display: block;
	position: fixed;
	top: 0;
	left: 10px;
	width: 80px;
	height: 80px;
	display: flex;
	justify-content: center;
`;

const Menu = styled.button`
	background: white;
	border: 1px solid white;
	border-radius: 10px;
	padding: 5px;
	margin: 5px;
	font-size: 20px;
	font-weight: 700;
`;

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
`;

const Navi = styled.nav`
	margin: 0px;
	padding: 0;
	position: sticky;
	top: 96px;
	bottom: 0;
`;

const List = styled.ul`
	padding: 0;
	display: none;
	flex-direction: column;
	li {
		left: 20px;
		text-align: center;
		width: 100px;
		list-style: none;
		border: 1px solid black;
		margin: auto 1px;
		background: white;
		color: black;
	}
	li:hover {
		background: #e7d917;
		color: black;
		font-weight: 700;
	}
`;
