import Operand from './Operand'

function Statement({ name, operands, setOperand }) {
  return (
    <div className="flex items-start justify-center gap-x-3">
      <span className="text-[#0100FF] text-xl pt-4">{name}</span>
      {operands.map((operand, idx) => (
        <div key={name + idx} className="flex gap-x-1">
          <Operand setOperand={setOperand} {...operand} />
          {idx + 1 !== operands.length && (
            <span className="self-end text-2xl">,</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default Statement
