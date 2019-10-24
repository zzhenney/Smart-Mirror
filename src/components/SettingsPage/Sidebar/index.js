import React from 'react';
import SettingsButton from './settingsButton'
import '../styles.css'

class Sidebar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentSetting: null
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(setting){
        this.setState({currentSetting: setting})
    }
    render(){
        return(
            <div className='sidebar_container'>
                <SettingsButton setting='Transit' />
                <SettingsButton setting='Weather' />
                <SettingsButton setting='Date & Time' />
                <SettingsButton setting='Orientation' />
                <SettingsButton setting='Layout' />
                
            </div>   
        );
    }
}

export default Sidebar;