import React from 'react'
import './Title.css'

function Title(props) {

  return (
    <>
      <div className='title'>
        <h1>{props.title}</h1>
        <p>Paris, Île-de-France</p>
      </div>
    </>
  )
}

export default Title