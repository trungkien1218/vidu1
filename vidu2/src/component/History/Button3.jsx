import React from 'react';
import History from './History';

class Button3 extends React.Component {
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
                    {clickActive ? 'Lịch sử mở ' : 'Lịch sử mở'}
                </button>
                {clickActive && (
                   <History />
                )}
            </div>
        );
    }
}

export default Button3;