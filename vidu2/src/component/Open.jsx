import React from 'react';
import Box from './Box';
import './main.css'
class ComplexButton extends React.Component {
    state = {
        isActive: false
    };

    toggleActiveState = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    };

    render() {
        const { isActive } = this.state;

        return (
            <div>
                <button 
                    className={isActive ? 'custom-button active' : 'custom-button'} 
                    onClick={this.toggleActiveState}
                >
                    {isActive ? 'đã Mở ' : 'Mở quà'}
                </button>
                {isActive && (
                    <Box />
                )}
            </div>
        );
    }
}

export default ComplexButton;
