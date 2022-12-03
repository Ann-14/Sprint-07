import React from 'react'

export const CheckBox = ({label,value,onChange,name,id}) => {
  return (
    <>
    <label>
      <input type="checkbox" id={id} name={name} value={value} onChange={onChange} />
      {label}
    </label>
    </>
  )
}
