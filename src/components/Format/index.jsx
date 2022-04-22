import { Box, Grid } from '@mui/material'
import Field from './Field'

function Format({ format, name, fields }) {
  return (
    <div className="text-center">
      <div>
        <h2 className="text-2xl">{name} Instruction</h2>
        <h3 className="text-lg">{format} - Format</h3>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} columns={{ xs: 1, sm: 12 }}>
          {fields.map(field => (
            <Field key={field.name} label={field.name} value={field.address} />
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Format
