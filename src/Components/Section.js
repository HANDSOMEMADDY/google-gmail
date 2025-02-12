import React from 'react'
import './section.css'

function Section({Icon,title,color,selected}) {
  return (
    <div className={`section ${selected && "section-selected"}`}
        style={{
            bordeBottom: `3px solid ${color}`,
            color: `${selected && color},`
        }}
        >
      <Icon/>
      <h4>{title}</h4>
    </div>
  )
}

export default Section