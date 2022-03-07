import React from 'react'
import arrow from './arrow.svg'
import Image from 'next/image';

const Footer: React.FC<{ handleNext: React.MouseEventHandler, handleBack: React.MouseEventHandler, isFirst:Boolean, isLast:Boolean }> = ({ ...props }): JSX.Element => { 
  return (
    <>
       <footer className="nav-button-container">
        {!props.isFirst && <Image className="triangle-left" alt="left arrow button" src={arrow} onClick={props.handleBack} />}
        {!props.isLast && <Image className="triangle-right" alt="right arrow button" src={arrow} onClick={props.handleNext} /> }
      </footer>
    </>
  )
}

export default React.memo(Footer)