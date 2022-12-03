import React from 'react'

export const CheckBox = ({label,value,onChange,name,id,checked}) => {
  return (
    <>
    <label>
      <input type="checkbox" id={id} name={name} value={value} onChange={onChange} checked={checked} />
      {label}
    </label>
    </>
  )
}
