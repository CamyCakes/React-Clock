import React from 'react'
import { TimePicker } from 'antd';
import moment from 'moment';

import 'antd/dist/antd.css';
import './css/alarm.scss'
import alarmSound from './assets/alarm.mp3'

class Alarm extends React.Component{

	constructor( props ){
		super(props)
		this.state = {
            alarms: [
                {
                    alarmSet: true,
                    alarmVal: '02:16 pm'
                },
                {
                    alarmSet: false,
                    alarmVal: '01:57 am'
                }
            ]
		}
    }

    newAlarm(){
        let arr = [...this.state.alarms]
        arr.push({
            alarmSet: true,
            alarmVal: '0:00 am'
        })
        this.setState( {
            alarms: arr
        })
    }

    setAlarm( index ){
        let arr = [...this.state.alarms]
        arr[index].alarmSet = !arr[index].alarmSet
        this.setState( {
            alarms: arr
        })
    }

	setAlarmTime( alarmTime, alarmIndex ) {
        let arr = [...this.state.alarms]
        arr[alarmIndex].alarmVal = alarmTime
        arr[alarmIndex].alarmSet = true
        this.setState( {
            alarms: arr
        })
    }

    checkAlarm( currentTime ) {
        let arr = [...this.state.alarms];
        for( var i=0; i<arr.length; i++ ){
            if( currentTime.toLowerCase() === arr[i].alarmVal && arr[i].alarmSet ){
                this.soundTheAlarm()
                arr[i].alarmSet = false
                this.setState({
                    alarms: arr
                })
            }
        }
    }

    soundTheAlarm(){
        let alarm = new Audio(alarmSound)
        alarm.currentTime = 0
        alarm.play()
    }

    removeAlarm( index ){
        let arr = [...this.state.alarms]
        arr.splice( index, 1 )
        this.setState({
            alarms: arr
        })
    }

	render(){
        this.checkAlarm( this.props.currentTime )
        let format = "hh:mm a"
        
        let timePickers = this.state.alarms.map(( val, index ) => {
            let checked = val.alarmSet ? 'checked': false;
            let defaultVal =  moment( val.alarmVal, format );
            return (
                <div className="alarm-entry" key={ index.toString() }>
                    <TimePicker
                        size="large" 
                        disabled={ ! val.alarmSet }        
                        format={ format }
                        value={ defaultVal }
                        use12Hours
                        allowClear={ false }
                        onChange={( time, timestring ) => {
                            this.setAlarmTime( timestring, index ) 
                        }}
                    />  
                    <input type="checkbox" 
                        className="alarm-checkbox"
                        checked={ checked } 
                        onChange={ ()=>{ this.setAlarm( index ) }} 
                    />
                    <span 
                        className='remove-alarm'
                        onClick={ ()=>{ this.removeAlarm( index ) }}
                    >&times;</span>
                </div>
                  
            )
        })

        return (
			<div className='alarm-cont'>
                { timePickers }
                <div className='new-alarm-button' onClick={ ()=>{ this.newAlarm() }}> 
                    +
                </div>
			</div>
		)
	}
}

export default Alarm