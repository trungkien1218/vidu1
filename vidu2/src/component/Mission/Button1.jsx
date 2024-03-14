import React from 'react';

import Misson from './Misson.jsx';
class Button1 extends React.Component {
    state = {
        clickActive: false
    };

    toggleActive = () => {
        this.setState(prevState => ({
            clickActive: !prevState.clickActive
        }));
    };

    render() {
        const { clickActive } = this.state;

        return (
            <div>
                <button
                    className={clickActive ? 'custom-button active' : 'custom-button'}
                    onClick={this.toggleActive}
                >
                    {clickActive ? 'Nhiệm vụ ' : 'Nhiệm vụ'}
                </button>
                {clickActive && (
                    <Misson />
                )}
            </div>
        );
    }
}

export default Button1;
