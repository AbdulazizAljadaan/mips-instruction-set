import { MenuItem } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useEffect, useState } from 'react'
import registers from '../../data/registers.json'

function SelectRegister({ setOperand }) {
  const [value, setValue] = useState('00000')

  useEffect(() => {
    setOperand(value)
  }, [])

  const handleChange = event => {
    const { value } = event.target
    setValue(value)
    setOperand(value)
  }

  return (
    <Box sx={{ width: 90 }}>
      <FormControl fullWidth>
        <Select
          labelId="register-select-label"
          id="register-select"
          value={value}
          onChange={handleChange}
          sx={{
            '#register-select': {
              color: '#FB3D3E',
            },
          }}
        >
          {registers.map(register => (
            <MenuItem key={register.number} value={register.address}>
              {register.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectRegister
