import React from 'react';
import './styles.css';
import Transit from './SettingOption/transit';
import Weather from './SettingOption/weather';
import DateTime from './SettingOption/datetime';
import Orientation from './SettingOption/orientation';
import Layout from './SettingOption/layout';


class Settings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orientation: 'portrait'
        }
        this.setOrientation = this.setOrientation.bind(this)
        this.getOptionComponent = this.getOptionComponent.bind(this)
        //this.renderTransit = this.renderTransit.bind(this)
        
    }

    componentDidMount(){
        this.setState({orientation: 'portrait'})
        //options['orientation']= <Orientation orientation={this.setOrientation} />
        //options['layout'] = <Layout orientation={this.state.orientation} /> 
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
    
    /*
    renderTransit(){
        return(
            <Transit />
        )
    }

    renderWeather(){
        return(
            <Weather />
        )
    }

    renderDateTime(){
        return(
            <DateTime />
        )
    }
    */
    
    render(){
        return(
            this.getOptionComponent(this.props.option)
        )
        
    }

    /*
    render(){
        return(
            <div>
                <Transit />
                <Weather />
                <DateTime />
                <Orientation orientation={this.setOrientation} />
                <Layout orientation={this.state.orientation} /> 
            </div>   
        );
    }
    */
}

export default Settings