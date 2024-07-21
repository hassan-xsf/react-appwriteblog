import { forwardRef } from "react"
import React,{useId} from 'react'

const Input = forwardRef(function Input({
    label,
    type = "text",
    placeholder,
    className = "",
    ...props
}, ref) 
{
  const id = useId();
  return (
    <div className = "w-full">
        {label && <label htmlFor = {id}>{label}</label>}
        <input type = {type} placeholder = {placeholder}
            className = {`rounded-lg w-full px-4 py-4 ${className}`}
            ref = {ref}
            {...props}
            id = {id}>
    </input>
    </div>
  )
})

export default Input