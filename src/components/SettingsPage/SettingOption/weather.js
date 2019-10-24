import React from 'react';

class Weather extends React.Component {
    render(){
        return(
            <div id='weather'>
                <h4 className='content'>Weather</h4>
                <hr></hr>
                <div className='row'>
                    <input name='zipCode' type='text' id='zip-code' placeholder='Enter Zip Code'></input>
                </div>
            </div>
        )
    }
}

export default Weather