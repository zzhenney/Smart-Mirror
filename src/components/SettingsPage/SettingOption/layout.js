import React from 'react';

class Layout extends React.Component{
    constructor(props){
        super(props)
        this.layoutPreview = this.layoutPreview.bind(this)
        this.layoutOptions = this.layoutOptions.bind(this)
    }

    layoutOptions(layoutType){
        return(
            <div id='layout'>
                <h4 className='content'>Layout</h4>
                <hr></hr>
                <div className='row'>
                    <div className='orient_settings'>
                        <label>
                            {layoutType}
                            <input name='portrait' type='radio' id='orientation-portrait'></input>
                        </label>
                        
                    </div>
                </div>
            </div>
        )
    }

    layoutPreview(){
        if (this.props.orientation == 'portrait') {
            return(
                <div>
                    <div className='row'>
                        <div className='orient_settings'>
                            <div className='portrait_layout'></div>
                        </div>
                    </div>
                </div>                    
            )          
        }
        else{
            return(
                <div>
                    <div className='row'>
                        <div className='orient_settings'>
                            <div className='landscape_layout'></div>
                        </div>
                    </div>
                </div>                
            )
        }
    }

    render(){
        return([
            this.layoutOptions('High & Tight'),
            this.layoutPreview()
        ])
    }
}

export default Layout