import Operand from './Operand'

function Statement({ name, operands, setOperand }) {
  return (
    <div className="flex items-center gap-x-3">
      <span className="text-[#0100FF] text-xl">{name}</span>
      {operands.map((operand, idx) => (
        <Operand key={name + idx} setOperand={setOperand} {...operand} />
      ))}
    </div>
  )
}

export default Statement
