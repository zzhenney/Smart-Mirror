import React from 'react';
import './styles.css'
//import Settings from './settings';
import Transit from './SettingOption/transit';
import Weather from './SettingOption/weather';
import DateTime from './SettingOption/datetime';
import Orientation from './SettingOption/orientation';
import Layout from './SettingOption/layout';



class SettingsModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orientation: 'portrait'
        }
        this.setOrientation = this.setOrientation.bind(this)
        this.getOptionComponent = this.getOptionComponent.bind(this)
       
        
    }
    componentDidMount(){
        this.setState({orientation: 'portrait'})
    }

    setOrientation(orientation){
        this.setState({orientation: orientation})
    }

    getOptionComponent(option){
        switch(option){
            case 'transit':
                return <Transit />
            case 'weather':
                return <Weather />
            case 'datetime':
                return <DateTime />
            case 'orientation':
                return <Orientation orientation={this.setOrientation} />
            case 'layout':
                return <Layout orientation={this.state.orientation} />   
            default:
                return <div></div>
        }
    }

    render(){
        
        const userSettings = []
        
        this.props.settings.forEach(setting => {
            console.log(setting)
            userSettings.push(this.getOptionComponent(setting))
        });

        return(
            <div className='modal_container'>
                <h3 className='content'>Settings</h3>
                {userSettings}   
            </div>
        );
    }
}

export default SettingsModal