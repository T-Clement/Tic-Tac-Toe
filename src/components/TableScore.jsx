import React from 'react'

function TableScore({player, score}) {
  return (
    <div>
        Compteur de victoire du joueur {player} : {score}
    </div>
  )
}

export default TableScore