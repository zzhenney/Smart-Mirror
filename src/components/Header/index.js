import React from 'react';
import './styles.css';

class Header extends React.Component {
    render(){
        return(
            <div className='header'>
                <h3>MyMirror</h3>
                <h3 className='reflect'>MyMirror</h3>
            </div>
        );
    }
}

export default Header;