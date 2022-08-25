import { TextField } from '@material-ui/core'
import React, { useState } from 'react'

export type inputType = {
    textLabel:string
    variant: 'filled' | 'outlined' | 'standard'
    // color: 'secondary' | 'success' | 'error' | 	'primary' | 'info' | 'warning'
    color: any
}

export const Input = (props:inputType) => {

    const [title, setTitle] = useState('')

    return <TextField color={props.color} label={props.textLabel} variant={props.variant} value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
}
