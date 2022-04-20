import React from 'react'
import SelectInstruction from './components/SelectInstruction'
import useInstruction from './helpers/useInstruction'

function App() {
  const [instructionData, setInstructionData] = useInstruction()

  return (
    <div className="space-y-5">
      <h1 className="text-2xl text-center">Core Instruction Set</h1>
      <SelectInstruction setInstruction={name => setInstructionData(name)} />
    </div>
  )
}

export default App
