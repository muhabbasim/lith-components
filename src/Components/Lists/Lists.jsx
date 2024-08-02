import React, { memo } from 'react'

// Data
import { ListData01 } from './ListsData'

// Libraries
import { m } from 'framer-motion';
import { PropTypes } from "prop-types";
import Translatable from '../translatable_text/Translatable';

const Lists = (props) => {
    return (
        <ul className={`${props.theme}${props.className ? ` ${props.className}` : ""}`}>
            {
                props.data.map((item, i) => {
                    return (
                        <m.li key={i} className='flex gap-2'  {...{ ...props.animation, transition: { delay: (i+1) * props.animationDelay, initial: { opacity: 0, x: "100%" }, ease: [0.25, 1, 0.5, 1], duration: 1.2 } }}>
                            <div className=''>
                                {item.icon && <i className={`${item.icon}`}></i>}
                            </div>
                            {/* {item.linkTitle && <a aria-label="list" href={item.link} >{item.linkTitle}</a>} */}
                            <div>
                                {item.title ?
                                    <div className='block'>
                                        {item.title && <span className='block list-title'>
                                            <Translatable>
                                                {item.title}
                                            </Translatable>
                                        </span>}
                                        <span className=''>
                                            <Translatable>
                                                {item.content}
                                            </Translatable>
                                        </span>
                                    </div> : (
                                        <span>
                                            <Translatable>
                                                {item.content}
                                            </Translatable>
                                        </span>
                                    )}
                                {item.number && <span className='list-number'>{item.number}</span>}
                            </div>
                        </m.li>
                    )
                })
            }
        </ul>
    )
}

Lists.defaultProps = {
    data: ListData01,
    theme: "list-style-01",
    animationDelay: 0.1
}

Lists.propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string,
            content: PropTypes.string,
            link: PropTypes.string,
            icon: PropTypes.string,
            linkTitle: PropTypes.string,
            number: PropTypes.string,
        })
    ),
    animation: PropTypes.object,
    animationDelay: PropTypes.number,
    theme: PropTypes.string,
}

export default memo(Lists)