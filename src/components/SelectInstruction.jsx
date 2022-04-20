import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InstructionNames from '../data/instruction-names.json'

function SelectInstruction({ setInstruction }) {
  const [value, setValue] = React.useState('')

  const handleChange = event => {
    const { value } = event.target
    setValue(value)
    setInstruction(value)
  }

  return (
    <Box sx={{ maxWidth: 150, mx: 'auto' }}>
      <FormControl fullWidth>
        <InputLabel id="instruction">Instruction</InputLabel>
        <Select
          labelId="instruction"
          id="instruction-select"
          value={value}
          label="Instruction"
          onChange={handleChange}
        >
          {InstructionNames.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectInstruction
