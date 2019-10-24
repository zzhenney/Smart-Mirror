import React from 'react';
import SettingsModal from '../settingsModal.js';
import { Link, animateScroll } from 'react-scroll'

class SettingsButton extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this)
        
    }

    handleClick(){
           
        this.props.onClick(this.props.setting)
          
    }

    render(){
        return(
            <Link 
                className={'settings_button'}      
                activeClass={'current_setting'}
                
                to={`${this.props.setting.toLowerCase()}`}
                spy={true}         
                smooth={true}            
                offset={-120} 
                >
                    {this.props.setting}
            </Link>
        );
    }
}

export default SettingsButton;
