import styled from '@emotion/styled'
import React from 'react'
import { MEDIA_QUERY_END_POINT } from '../../constants'
import { btnLeftHandler, btnRightHandler, onWheel } from '../../utils/buttonHandler'

// React.FC를 사용할 때는 props 의 타입을 Generics 로 넣어서 사용
// props 에 기본적으로 children 이 들어가있다
// 컴포넌트의 defaultProps, propTypes, contextTypes 를 설정 할 때 자동완성
export const Slider: React.FC = ({ children }) => {
	return (
		<Container key={1}>
			<Button type="button" onClick={btnLeftHandler}>
				⬅
			</Button>
			<Slide className="slide">{children}</Slide>
			<Button onClick={btnRightHandler}>➡</Button>
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`

const Button = styled.button`
width: 50px
height: 50px;
background: none;
border: none;
font-size: 40px;
padding: 20px;
cursor: pointer
color: white;`

const Slide = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	overflow-x: scroll;
`
