import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Error, Loading } from '../../components';
import { useData } from '../../hooks/useData';

const CharacterDetail: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const pathname = 'characters';

	const { data, error } = useData(pathname, id);

	if (error) return <Error />;
	if (!data) return <Loading />;

	const { name, images, gender, species, homePlanet, occupation, sayings, age } = data;

	return (
		<CharacterDetailCard>
			<Info>
				<img src={images.main} alt="character image" />
				<ul>
					<h1>
						{name.first} {name.middle} {name.last}
					</h1>
					<li>Gender: {gender}</li>
					<li>Age: {age}</li>
					<li>Species: {species}</li>
					<li>Home Planet : {homePlanet}</li>
					<li>Occupation: {occupation}</li>
				</ul>
			</Info>

			<Saying>
				{sayings.map((saying: string, index: number) => (
					<p key={`saying-${index}`}>{saying}</p>
				))}
			</Saying>
		</CharacterDetailCard>
	);
};

const CharacterDetailCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

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
`;

const Saying = styled.div`
	font-style: italic;
	padding-top: 20px;
	text-align: center;
	p {
		background: white;
		border-radius: 20px;
		width: 80%;
		margin: 10px auto;
	}
`;

export default CharacterDetail;
