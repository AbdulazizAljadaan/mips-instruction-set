import { useState } from 'react'
import instructions from '../data/instructions.json'

function useInstruction(initialInstructionName) {
  const [instructionData, setInstructionData] = useState(
    initialInstructionName
      ? instructions.find(
          instruction => instruction.name === initialInstructionName
        )
      : null
  )

  function getInstructionData(name) {
    const data = instructions.find(instruction => instruction.name === name)
    setInstructionData(data)
  }

  return [instructionData, getInstructionData]
}

export default useInstruction
