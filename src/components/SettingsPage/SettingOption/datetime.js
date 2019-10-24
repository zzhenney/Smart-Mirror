import React from 'react';

class DTime extends React.Component {
    render(){
        return(
            <div id='date & time'>
                <h4 className='content'>Date & Time</h4>
                <hr></hr>
                <div className='row'>
                    <input name='dateFormat' type='radio' id='date-format'></input>
                    <label>MM/DD/YYYY : 10/16/2019</label>
                </div>
                <div className='row'>
                    <input name='dateFormat' type='radio' id='date-format'></input>
                        <label>DD/MM/YYYY : 16/10/2019</label>
                </div>
                <div className='row'>
                    <input name='dateFormat' type='radio' id='date-format'></input>
                        <label>Day, Month Day Date : Wednesday, October 16</label>
                </div>
            </div>
        )
    }
}
export default DTime;