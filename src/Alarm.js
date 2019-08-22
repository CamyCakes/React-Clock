import React from 'react'
import { TimePicker } from 'antd';

import 'antd/dist/antd.css';
import './css/alarm.scss'
class Alarm extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			alarms: []
		}
	}

	setAlarm = alarmTime => {
		let arr = [...this.state.alarms, alarmTime];
		console.log( arr );
	}

	render(){
		return (
			<div className='alarm-cont'>
				<TimePicker 
					onChange={( time, timestring ) => {
							this.setAlarm( timestring )
						}
					}
				/>
			</div>
		)
	}
}

export default Alarm