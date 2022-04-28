import React from 'react'
import NumberInput from './NumberInput'
import SelectRegister from './SelectRegister'

function EffectiveAddress({ setOperand, min, max, isSigned }) {
  return (
    <div className="flex items-start gap-x-1">
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
      <div className="flex items-center">
        <span className="text-2xl">(</span>
        <SelectRegister
          setOperand={address =>
            setOperand({
              address,
              name: 'rs',
            })
          }
        />
        <span className="text-2xl">)</span>
      </div>
    </div>
  )
}
export default EffectiveAddress
