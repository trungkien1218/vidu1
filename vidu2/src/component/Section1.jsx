import React from 'react'
import './main.css'
import ComplexButton from './Open.jsx'
import ButtonMission from './Mission/Button.jsx'
import Misson from './Mission/Misson.jsx'
const Section1 = () => {
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
                                            <span><ButtonMission /> </span>
                                            <div className='dots'></div>
                                        </div>
                                    </div>
                                </div>

                            </span>
                            <span className='sec1-text1'>
                                <div className='sec1-text4'>
                                    <div className='sec1-text3'>
                                        <div className='sec1-text2'>
                                            <span> <ComplexButton /> </span>
                                            <div className='dots'></div>
                                        </div>
                                    </div>
                                </div>

                            </span>
                            <span className='sec1-text1'>
                                <div className='sec1-text4'>
                                    <div className='sec1-text3'>
                                        <div className='sec1-text2'>
                                            <span>Lịch sử mở</span>
                                            <div className='dots'></div>
                                        </div>
                                    </div>
                                </div>

                            </span>
                        </div>
 
                    </div>
                    
                    <ComplexButton />
                    <Misson />
                </div>
            </div>
        </>
    )
}

export default Section1