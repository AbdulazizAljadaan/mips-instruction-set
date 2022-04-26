import { Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import intToAny from '../../helpers/intToAny'
import useErrorMessage from '../../helpers/useErrorMessage'

function NumberInput({ min, max, bit, isSigned, setOperand }) {
  const [value, setValue] = useState(0)
  const [message, hideErrorMessage, showErrorMessage] = useErrorMessage([
    'operand is out of range',
  ])

  useEffect(() => {
    setOperand(intToAny(value, 2, { length: bit, signed: isSigned }))
    // eslint-disable-next-line
  }, [])

  function handleChange(event) {
    const { value } = event.target
    if (value === ' ') return
    if (!Number.isInteger(Number(value))) return

    hideErrorMessage()
    if (value > max || value < min) showErrorMessage()

    if (value >= min && value <= max) {
      setValue(value)
      setOperand(intToAny(value, 2, { length: bit, signed: isSigned }))
    }
  }

  return (
    <Box sx={{ width: 90 }}>
      <TextField
        error={Boolean(message)}
        helperText={message}
        type="number"
        id="immediate-value"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
    </Box>
  )
}

export default NumberInput
