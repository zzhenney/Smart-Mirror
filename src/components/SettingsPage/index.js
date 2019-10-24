import React from 'react';

import Sidebar from './Sidebar';
import Header from '../Header'
import './styles.css'
import SettingsModal from './settingsModal.js';


class SettingsPage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            selected: {
                transit: {
                    bart: false,
                    muni: false
                },
                dateFormat: {
                    mmddyyyy: false,
                    ddmmyyyy: false,
                    daymmdd: false
                },
                orientation: {
                    portrait: true,
                    landscape: false
                },
                layout: {
                    tight: false,
                    spread: false
                }
            },
            input: {
                bart: {
                    line: null,
                    start: null
                },
                muni: {
                    line: null,
                    direction: null,
                    stop: null
                },
                weather: null,

            }
        }

        
    }

    
    render(){
        const userSettings = ['transit', 'weather', 'datetime', 'orientation', 'layout']
        return(
            <div className='mirror_container'>
                <Header />
                <Sidebar />
                <SettingsModal settings={userSettings}/>
            </div>
            
        );
    }
}

export default SettingsPage;