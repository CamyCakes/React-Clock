import React from 'react'
import Digit from './Digit'

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state={
			hours: 88,
			minutes: 88,
			seconds: 88,
			ampm: null
		}
	}

	componentDidMount(){
		this.startClock();
	}
	
	startClock(){
		window.setInterval(()=>{	
			this.setTime();
		}, 1000 );
	}

	setTime(){
		let theTime = new Date();

		let hours = theTime.getHours();
		if( hours < 10 ) hours = '0' + hours;
		if( hours > 12 ) hours -= 12;
		if( hours === 0 ) hours = 12;

		let minutes = theTime.getMinutes();
		if( minutes < 10 ) minutes = '0' + minutes;

		let seconds =  theTime.getSeconds();
		if( seconds < 10 ) seconds = '0' + seconds;

		let ampm = hours >= 12 ? 'pm':'am';
		this.setState(()=>{
			return {
				hours: hours,
				minutes: minutes,
				seconds: seconds,
				ampm : ampm.toUpperCase()
			}
		})
	}
	
	render(){

		let seconds = this.state.seconds.toString().split('');
		if( seconds.length === 1 ){
			seconds[1] = seconds[0];
			seconds[0] = '0';
		}

		let minutes = this.state.minutes.toString().split('');
		if( minutes.length === 1 ){
			minutes[1] = minutes[0];
			minutes[0] = '0';
		}

		let hours = this.state.hours.toString().split('');
		if( hours.length === 1 ){
			hours[1] = hours[0];
			hours[0] = '0';
		}
		
		return(	
			<div className="digits">
				<span>
					<Digit number={ hours[0] }/> 
					<Digit number={ hours[1] }/> 
				</span>
				<span>
				<Digit number={ minutes[0] }/> 
					<Digit number={ minutes[1] }/>
				</span>
				<span>
				<Digit number={ seconds[0] } /> 
					<Digit number={ seconds[1] }/> 
				</span>
			</div>
		)
	}
}

export default Clock