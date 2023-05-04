import { Avatar } from "@mui/material"

import css from './User.module.css'

export interface Name {
  name: string
}

export const User = ({name}: Name) => {
  return (
    <div className={css.nameArea}>
      <Avatar
        sx={{
          bgcolor: '#1976d2'
        }} 
      />
      <div className={css.name}>{name}</div>
    </div>
  )
}