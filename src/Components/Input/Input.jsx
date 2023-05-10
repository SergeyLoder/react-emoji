import React from 'react'
import s from "./Input.module.css"

export const Input = ({value, inputHandler}) => {
  return (
      <input className={s.card} value={value} onChange={inputHandler} type="text" />
  )
}
