import React, { useState } from 'react';
import './main.css';
import ComplexButton from './Gift/Button2.jsx';
import ButtonMission from './Mission/Button1.jsx';
import Misson from './Mission/Misson.jsx';
import Button3 from './History/Button3.jsx';
import Button1 from './Mission/Button1.jsx';
import Button2 from './Gift/Button2.jsx';
import History from './History/History.jsx';
import Box from './Gift/Box.jsx';

const Section1 = () => {
    const [missionActive, setMissionActive] = useState(false);
    const [giftActive, setGiftActive] = useState(false);
    const [historyActive, setHistoryActive] = useState(false);

    const toggleActive = (button) => {
        setMissionActive(button === 'mission' ? true : false);
        setGiftActive(button === 'gift' ? true : false);
        setHistoryActive(button === 'history' ? true : false);
    };

    return (
        <>
            <div className='BG'>
                <div className='container-1'>
                    <div className='sec1-margin'></div>
                    <div className="sec1-option">
                        <div className='sec1-table'>
                            <span className='sec1-text1'>
                                <div className='sec1-text4'>
                                    <div className='sec1-text3'>
                                        <div className='sec1-text2'>
                                            <div>
                                                <button
                                                    className={missionActive ? 'custom-button active' : 'custom-button'}
                                                    onClick={() => toggleActive('mission')}
                                                >
                                                    Nhiệm vụ
                                                </button>
                                                {missionActive && (
                                                    <Misson />
                                                )}
                                            </div>
                                            <div className='dots'></div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <span className='sec1-text1'>
                                <div className='sec1-text4'>
                                    <div className='sec1-text3'>
                                        <div className='sec1-text2'>
                                            <div>
                                                <button
                                                    className={giftActive ? 'custom-button active' : 'custom-button'}
                                                    onClick={() => toggleActive('gift')}
                                                >
                                                    Mở quà
                                                </button>
                                                {giftActive && (
                                                    <Box />
                                                )}
                                            </div>
                                            <div className='dots'></div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <span className='sec1-text1'>
                                <div className='sec1-text4'>
                                    <div className='sec1-text3'>
                                        <div className='sec1-text2'>
                                            <div>
                                                <button
                                                    className={historyActive ? 'custom-button active' : 'custom-button'}
                                                    onClick={() => toggleActive('history')}
                                                >
                                                    Lịch sử mở
                                                </button>
                                                {historyActive && (
                                                    <History />
                                                )}
                                            </div>
                                            <div className='dots'></div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                    <Misson />
                    <Box />
                </div>
            </div>
        </>
    )
}

export default Section1;
