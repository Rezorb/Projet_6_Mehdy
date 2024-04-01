import React from 'react'
import "./Tags.css"

function Tags(props) {
  return (
    <>
    <div className='tags'>
    <span>{props.tags_content}</span>

    </div>
    </>
  )
}

export default Tags