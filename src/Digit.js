import React from 'react'

class Digit extends React.Component{

	render(){
		let number = parseInt(this.props.number);
		let numberRenderer = [
			[ <TopLeftCell o='1' />, <TopCell o='1' />, <TopRightCell o='1' />, <BottomLeftCell o='1' />, <MiddleCell o='0.1' />, <BottomRightCell o='1'  />, <BottomCell o='1' /> ],
			[ <TopLeftCell o='0.1' />, <TopCell o='0.1' />, <TopRightCell o='1' />, <BottomLeftCell o='0.1' />, <MiddleCell o='0.1' />, <BottomRightCell o='1' />, <BottomCell o='0.1' /> ],
			[ <TopLeftCell o='0.1' />, <TopCell o='1' />, <TopRightCell o='1' />, <BottomLeftCell o='1' />, <MiddleCell o='1' />, <BottomRightCell o='0.1' />, <BottomCell o='1' /> ],
			[ <TopLeftCell o='0.1' />, <TopCell o='1' />, <TopRightCell o='1' />, <BottomLeftCell o='0.1' />, <MiddleCell o='1' />, <BottomRightCell o='1' />, <BottomCell o='1' /> ],
			[ <TopLeftCell o='1' />, <TopCell o='0.1' />, <TopRightCell o='1' />, <BottomLeftCell o='0.1' />, <MiddleCell o='1' />, <BottomRightCell o='1' />, <BottomCell o='0.1' /> ],
			[ <TopLeftCell o='1' />, <TopCell o='1' />, <TopRightCell o='0.1' />, <BottomLeftCell o='0.1' />, <MiddleCell o='1' />, <BottomRightCell o='1' />, <BottomCell o='1' /> ],
			[ <TopLeftCell o='1' />, <TopCell o='1' />, <TopRightCell o='0.1' />, <BottomLeftCell o='1' />, <MiddleCell o='1' />, <BottomRightCell o='1' />, <BottomCell o='1' /> ],
			[ <TopLeftCell o='0.1' />, <TopCell o='1' />, <TopRightCell o='1' />, <BottomLeftCell o='0.1' />, <MiddleCell o='0.1' />, <BottomRightCell o='1' />, <BottomCell o='0.1' /> ],
			[ <TopLeftCell o='1' />, <TopCell o='1' />, <TopRightCell o='1' />, <BottomLeftCell o='1' />, <MiddleCell o='1' />, <BottomRightCell o='1' />, <BottomCell o='1' /> ],
			[ <TopLeftCell o='1' />, <TopCell o='1' />, <TopRightCell o='1' />, <BottomLeftCell o='0.1' />, <MiddleCell o='1' />, <BottomRightCell o='1' />, <BottomCell o='1' /> ],
            [ <TopLeftCell o='0.1' />, <TopCell o='0.1' />, <TopRightCell o='0.1' />, <BottomLeftCell o='0.1' />, <MiddleCell o='0.1' />, <BottomRightCell o='0.1' />, <BottomCell o='0.1' /> ]
        ]
   
        let digit = (this.props.isFirst && number === 0 ) ? numberRenderer[10] : numberRenderer[number];

		return( 
            <span className="digit-cont" >
                { digit }
            </span>
		)
	}
}

function MiddleCell(props){
	return(
		<svg className='digit-chunk middle' style={{opacity: + props.o }} viewBox='0 0 103.85 36.21' >
			<polygon points='15.44 0 87.94 0 103.85 15.92 103.85 20.42 88.06 36.21 16.94 36.21 0 19.27 0 15.5 15.44 0'/>
		</svg>
	)
}
function TopCell(props){
	return(
		<svg className='digit-chunk top' style={{opacity: + props.o }} viewBox='0 0 121.17 34.83' >
			<polygon points='121.17 7.83 121.17 11 97.33 34.83 23.67 34.83 0 11.17 0 8 8 0 113.32 0 121.17 7.83'/>
		</svg>
	)
}
function BottomCell(props){
	return(
		<svg className='digit-chunk bottom' style={{opacity: + props.o }} viewBox='0 0 121.17 34.83' >
			<polygon points='0 27 0 23.83 23.84 0 97.5 0 121.17 23.66 121.17 26.83 113.17 34.83 7.85 34.83 0 27'/>
		</svg>
	)
}
function TopRightCell(props){
	return(
		<svg className='digit-chunk top-right' style={{opacity: + props.o }} viewBox='0 0 36.33 112.41' >
			<polygon points='28.39 0 36.33 7.94 36.33 95.63 19.55 112.41 16.14 112.41 0 96.27 0 24.28 24.27 0.01 28.39 0'/>
		</svg>
	)
}
function TopLeftCell(props){
	return(
		<svg className='digit-chunk top-left' style={{opacity: + props.o }} viewBox='0 0 36.33 112.41' >
			<polygon points='12.06 0.01 36.33 24.28 36.33 96.27 20.19 112.41 16.78 112.41 0 95.63 0 7.94 7.94 0 12.06 0.01'/>
		</svg>
	)
}
function BottomRightCell(props){
	return(
		<svg className='digit-chunk bottom-right' style={{opacity: + props.o }} viewBox='0 0 36.33 112.41' >
			<polygon points='24.27 112.4 0 88.13 0 16.14 16.14 0 19.55 0 36.33 16.78 36.33 104.47 28.39 112.41 24.27 112.4'/>
		</svg>
	)
}
function BottomLeftCell(props){
	return(
		<svg className='digit-chunk bottom-left' style={{opacity: + props.o }} viewBox='0 0 36.33 112.41' >
			<polygon points='7.94 112.41 0 104.47 0 16.78 16.78 0 20.19 0 36.33 16.14 36.33 88.13 12.06 112.4 7.94 112.41'/>
		</svg>
	)
}

export default Digit