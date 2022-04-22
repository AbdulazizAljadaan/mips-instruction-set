import { Container } from '@mui/material'
import React from 'react'
import Format from './components/Format'
import SelectInstruction from './components/SelectInstruction'
import useInstruction from './helpers/useInstruction'

function App() {
  const [instructionData, setInstructionData] = useInstruction()

  return (
    <Container>
      <div className="space-y-5">
        <h1 className="text-2xl text-center">Core Instruction Set</h1>
        <SelectInstruction setInstruction={name => setInstructionData(name)} />
        {instructionData && <Format {...instructionData} />}
      </div>
    </Container>
  )
}

export default App
