import React from 'react'

const NestedLinkComponent = (props) => {
    const {icon,content,angleDown,nestedLinksClick} = props
    return (
        <div className='nested-links-content' onClick={(e)=>nestedLinksClick(e)}>
            {icon}
            <span>{content}</span>
            {angleDown}
        </div>
    )
}

export default NestedLinkComponent;