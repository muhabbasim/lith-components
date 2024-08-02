import React, { memo } from 'react'
import '../../Assets/additionalStyle.css';

// Libraries
import { Row } from 'react-bootstrap';
import { m } from 'framer-motion';
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';

// components
import Buttons from '../Button/Buttons'

// Data
import { IconWithTextData_01 } from './IconWithTextData'

// css
import "../../Assets/scss/components/_iconwithtext.scss"
import Translatable from '../translatable_text/Translatable';

const IconWithText = (props) => {
  return (
    <Row className={` ${props.grid} md:justify-center`}>
      {
        props.data.map((item, i) => {
          return (
            <m.div key={i} className={`project_goal`} {...{ ...props.animation, transition: { delay: i * props.animationDelay, ease: props.animationTransition, duration: props.animationDuration } }}>
              <div className="rounded-md w-full flex gap-4">
                <Link aria-label="link for icon" to="#"><i className={`goal_icon ${item.icon} text-[#de7a2c]x`} ></i></Link>
                <div className='feature-box-content'>
                  {item.title && <span className="font-medium titlex text-lg font-serif text-whitex text-[#1c5187]"><Translatable>{item.title}</Translatable></span>}
                  {item.content && <p className='text-[#1c5187]x text-lg'><Translatable>{item.content}</Translatable></p>}
                </div>
              </div>
            </m.div>
          )
        })
      }
    </Row>
  )
}

IconWithText.defaultProps = {
  data: IconWithTextData_01,
  animationDelay: 0.6,
  animationDuration: 0.8,
  animationTransition: "circOut",
  theme: "icon-with-text-01",
}

IconWithText.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      icon: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      linkTitle: PropTypes.string,
      img: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  animation: PropTypes.object,
  animationDelay: PropTypes.number,
  animationTransition: PropTypes.string,
  theme: PropTypes.string,
  grid: PropTypes.string,
}


export default memo(IconWithText)