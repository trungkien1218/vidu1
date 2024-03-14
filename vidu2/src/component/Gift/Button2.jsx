import React from 'react';
import Box from './Box';

class Button2 extends React.Component {
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
                    {isActive ? 'Mở quà' : 'Mở quà'}
                </button>
                {isActive && (
                    <Box />
                )}
            </div>
        );
    }
}

export default Button2;
