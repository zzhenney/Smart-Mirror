import React from 'react';


class Transit extends React.Component {
    

    render(){
        return(
            <div id='transit'>
                <h4 className='content'>Transit</h4>
                <hr></hr>
                <div className='row'>
                    
                    <input type='checkbox' id='bartCheck'></input>
                    <label for='bartCheck' id='bartLabel'>Bart</label>
                    
                    <div className='dropdown'>
                        <select id='select-start-station' value='null' name='bartStart'>
                            <option>Select Starting Station</option>
                            <option>Station 1</option>
                        </select>
                    </div>
                    <div className='dropdown'>
                        <select id='select-train' value='null' name='bartEnd'>
                            <option>Select Line</option>
                            <option>Station 1</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    
                    <input type='checkbox' id='muniCheck'></input>
                    <label for='muniCheck' id='muniLabel'>Muni</label>
                    
                    <div className='dropdown'>
                        <select id='select-line' value='null' name='muniLine'>
                            <option>Select Bus Line</option>
                            <option>Station 1</option>
                        </select>
                    </div>
                    <div className='dropdown'>
                        <select id='select-direction' value='null' name='muniDirection'>
                            <option>Select Direction</option>
                            <option>Station 1</option>
                        </select>
                    </div>
                    <div className='dropdown'>
                        <select id='select-stop' value='null' name='muniStop'>
                            <option>Select Stop</option>
                            <option>Station 1</option>
                        </select>
                    </div>
                </div>
            </div>
            
            
        )
    }
}

export default Transit