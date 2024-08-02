import React, { memo } from 'react'
// Data
import { TextBoxData01 } from './TextBoxData'

// Libraries
import { Col, Row } from 'react-bootstrap'
import { m } from 'framer-motion'
import { PropTypes } from 'prop-types';

// css
import "../../Assets/scss/components/_textbox.scss"
import Translatable from '../translatable_text/Translatable';

const TextBox = (props) => {
    return (
        <Row className= {`${props.grid} ${props.theme} ${props.className} flex gap-4 flex-wrap bg-white `}>
            {
                props.data.map((item, i) => {
                    return (
                        <Col style={{ border: '1px solid #1c5187'}} className={` rounded-xl p-0 overflow-hidden`} key={i}>
                            <m.div className="feature-box-contentx text-white" {...{...props.animation,transition:{delay : i * props.animationDelay}}}>
                                <div className='flex flex-col'>
                                    <div className='text-center p-14'>
                                        <h2 className='text-gray-500 m-0'>{item.number}</h2>
                                    </div>
                                    <div style={{ backgroundColor: item?.color }}>
                                        <h2 className='flex justify-center items-center text-center m-0 text-lg p-4'>
                                            <Translatable>
                                                {item.title}
                                            </Translatable>
                                        </h2>
                                    </div>
                                </div>
                                {/* {
                                    (props.theme === "text-box-style-01") ?
                                        <>
                                            <h2>{item.number}</h2>
                                            <div 
                                                // style={{ minWidth: '200px', minHeight: '90px', backgroundColor: item?.color }} 
                                                className="w-full h-full flex items-center justify-center rounded-md"
                                            >

                                                <span style={{ color: 'white', padding: 10 }}>
                                                    <Translatable>
                                                        {item.title}
                                                    </Translatable>
                                                </span>
                                            </div>
                                    
                                        </> 
                                    :

                                        <>
                                            <span >
                                                <Translatable>
                                                    {item.title}
                                                </Translatable>
                                            </span>

                                            <div className="feature-box-number"><span></span>{item.number}</div>
                                        </>
                                } */}
                            
                            </m.div>
                        </Col>
                    )
                }
                )
            }

        </Row>)
}

TextBox.defaultProps = {
    data: TextBoxData01,
    theme: "text-box-style-01",
    animationDelay:0.3
}

TextBox.propTypes = {
    className: PropTypes.string,
    theme: PropTypes.string,
    animation: PropTypes.object,
    animationDelay: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ]),
    grid: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            number: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
        })
    ),
}

export default memo(TextBox)