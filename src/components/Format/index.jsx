import { Box, Grid } from '@mui/material'
import Field from './Field'

function Format({ format, fields }) {
  return (
    <div>
      <h3 className="text-lg text-center">
        <span className="font-bold">{format}</span> - Format
      </h3>
      <Box>
        <Grid container spacing={{ xs: 0.5, sm: 1 }}>
          {fields.map(field => (
            <Field key={field.name} label={field.name} value={field.address} />
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Format
