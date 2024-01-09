import React, { useState } from 'react'

function Square({value, onSquareClick}) {
// state



// comportements


// affichage
  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  )
}

export default Square