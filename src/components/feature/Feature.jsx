import React from 'react'
import './feature.css'

const Feature = ({title,text}) => {
  return (
    <div className='gpt3__features-container__features'>
      <div className='gpt3__features-container__features-title'>{title}</div>
      <div className='gpt3__features-container__features-text'>{text}</div>
    </div>
  )
}

export default Feature