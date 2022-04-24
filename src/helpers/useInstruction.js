import { useReducer } from 'react'
import instructions from '../data/instructions.json'

export const INSTRUCTION_ACTIONS = {
  FIND_INSTRUCTION: 'FIND_INSTRUCTION',
  UPDATE_OPERAND: 'UPDATE_OPERAND',
}

function instructionReducer(state, action) {
  const { type, payload } = action
  const { name, operand } = payload
  switch (type) {
    case INSTRUCTION_ACTIONS.FIND_INSTRUCTION: {
      return instructions.find(instruction => instruction.name === name)
    }
    case INSTRUCTION_ACTIONS.UPDATE_OPERAND: {
      const { name, address } = operand
      let fieldsCopy = [...state.fields]
      let operandCopy = fieldsCopy.find(field => field.name === name)
      operandCopy.address = address
      return { ...state, fields: fieldsCopy }
    }
    default: {
      throw new TypeError(`${type} is not valid`)
    }
  }
}

function useInstruction() {
  const [instructionData, dispatch] = useReducer(instructionReducer, null)

  return [instructionData, dispatch]
}

export default useInstruction
