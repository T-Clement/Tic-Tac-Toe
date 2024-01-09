import { useState } from 'react';
import Board from './components/Board'
import TableScore from './components/TableScore';



function App() {
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);



  return (
    <>
      <Board scoreX = {scoreX} scoreO= {scoreO} setScoreO={setScoreO} setScoreX={setScoreX}/>

      <TableScore player="X" score={scoreX}/>
      <TableScore player="O" score={scoreO}/>
    </> 
  )
}

export default App
