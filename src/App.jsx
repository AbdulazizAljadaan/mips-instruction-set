import React from 'react'
import Format from './components/Format'
import SelectInstruction from './components/SelectInstruction'
import Statement from './components/Statement'
import useInstruction, { INSTRUCTION_ACTIONS } from './helpers/useInstruction'

function App() {
  const [instructionData, dispatch] = useInstruction()

  return (
    <div className="px-2 py-4">
      <div className="space-y-8">
        <h1 className="text-2xl text-center">Core MIPS Instruction Set</h1>
        <SelectInstruction
          setInstruction={name =>
            dispatch({
              type: INSTRUCTION_ACTIONS.FIND_INSTRUCTION,
              payload: { name },
            })
          }
        />
        {instructionData && (
          <>
            <Statement
              setOperand={operand =>
                dispatch({
                  type: INSTRUCTION_ACTIONS.UPDATE_OPERAND,
                  payload: { operand },
                })
              }
              {...instructionData}
            />
            <Format {...instructionData} />
          </>
        )}
      </div>
    </div>
  )
}

export default App
