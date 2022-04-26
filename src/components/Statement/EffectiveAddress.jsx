import React from 'react'
import NumberInput from './NumberInput'
import SelectRegister from './SelectRegister'

function EffectiveAddress({ setOperand, min, max, isSigned }) {
  return (
    <div className="flex items-center">
      <NumberInput
        setOperand={address =>
          setOperand({
            address,
            name: 'immediate',
          })
        }
        bit={16}
        min={min}
        max={max}
        isSigned={isSigned}
      />
      (
      <SelectRegister
        setOperand={address =>
          setOperand({
            address,
            name: 'rs',
          })
        }
      />
      )
    </div>
  )
}
export default EffectiveAddress
