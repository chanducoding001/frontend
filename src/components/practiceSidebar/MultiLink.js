import React from 'react'

const MultiLink = (props) => {
  const {icon,content,angle} = props
  return (
    <>
    <div className='multi-link'>
        <span className='icon'>{icon}</span>
        <span className='content'>{content}</span>
        <span className='content'>{angle}</span>
    </div>
    </>
  )
}

export default MultiLink;