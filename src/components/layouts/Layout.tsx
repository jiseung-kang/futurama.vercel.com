import styled from '@emotion/styled';
import React from 'react';
import { Navigation } from '.';
import { MEDIA_QUERY_END_POINT } from '../../constants';

// React.FC를 사용할 때는 props 의 타입을 Generics 로 넣어서 사용
// props 에 기본적으로 children 이 들어가있다
// 컴포넌트의 defaultProps, propTypes, contextTypes 를 설정 할 때 자동완성
export const Layout: React.FC = ({ children }) => {
	return (
		<div>
			<Navigation />
			<Container>{children}</Container>
		</div>
	);
};

const Container = styled.main`
	max-width: ${MEDIA_QUERY_END_POINT.TABLET};
	margin: 0 auto;
	padding: 0;
`;
