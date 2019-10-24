import React from 'react';

class Orientation extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange(e){
        this.props.orientation(e.target.name);
        
    }
    render(){
        return(
            <div id='orientation'>
                <h4 className='content'>Orientation</h4>
                <hr></hr>
                <div className='row'>
                    <div className='orient_settings'>
                        <label>
                            <div className='portrait'></div>
                            <input 
                                name='portrait'
                                type='radio' 
                                id='orientation-portrait'
                                checked='checked' 
                                onClick={this.handleChange}>
                            </input>
                        </label>
                    </div>
                    <div className='orient_settings'>
                        <label>
                            <div className='landscape'></div>
                            <input 
                                name='landscape' 
                                type='radio' 
                                id='orientation-landscape'
                                onClick={this.handleChange}>
                            </input>
                        </label>                        
                    </div>
                </div>
            </div>           
        )
    }
}

export default Orientation