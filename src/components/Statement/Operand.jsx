import React from 'react'
import EffectiveAddress from './EffectiveAddress'
import NumberInput from './NumberInput'
import SelectRegister from './SelectRegister'

function Operand({ type, name, min, max, operands, bit, setOperand }) {
  if (type === 'register') {
    return (
      <SelectRegister setOperand={address => setOperand({ address, name })} />
    )
  } else if (type === 'number') {
    return (
      <NumberInput
        setOperand={address => setOperand({ address, name })}
        bit={bit}
        min={min}
        max={max}
      />
    )
  } else if (type === 'immediate-register') {
    return (
      <EffectiveAddress
        setOperand={setOperand}
        min={operands[0].min}
        max={operands[0].max}
      />
    )
  }
}

export default Operand
