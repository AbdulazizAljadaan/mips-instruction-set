import { styled } from '@mui/material/styles'
import { Grid, Paper } from '@mui/material'
import React from 'react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function Field({ label, value }) {
  return (
    <Grid item flexGrow={1}>
      <div className="text-center">{label}</div>
      <Item>{value}</Item>
    </Grid>
  )
}

export default Field
