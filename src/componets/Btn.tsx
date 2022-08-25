import React from 'react'
import Button from '@material-ui/core/Button';

type propsTypeBnt = {
  name: string
  variant: 'text' | 'outlined' | 'contained'
  startIcon: any
  size: 'small' | 'medium' | 'large' 
  callback: () => void
  // color: 'secondary' | 'success' | 'error' | 'inherit' | 'primary' | 'info' | 'warning' 
  color: any
}

export const Btn = (props:propsTypeBnt) => {
  return (
    <Button variant={props.variant} startIcon={props.startIcon} size={props.size} color={props.color} onClick={props.callback}>
      {props.name}
    </Button>
  )
}
