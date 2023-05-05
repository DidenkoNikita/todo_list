import { Avatar, Box } from "@mui/material"

import css from './User.module.css'

export interface Name {
  name: string
}

export const User = ({name}: Name) => {
  return (
    <Box className={css.nameArea}>
      <Avatar
        sx={{
          bgcolor: '#1976d2'
        }} 
      />
      <Box className={css.name}>{name}</Box>
    </Box>
  )
}