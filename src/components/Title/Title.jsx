import React from 'react'
import './Title.scss'

function Title(props) {

  return (
    <>
      <div className='title'>
        <h1>{props.title}</h1>
        <p>{props.location}</p>
      </div>
    </>
  )
}

export default Title