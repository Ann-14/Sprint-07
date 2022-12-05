import { useState } from "react"
import {PanelStyled} from '../styles/PanelStyled'

let webPriceCalculation = 0
export const Panel = ({webPrice}) => {
    const [pages, setPages] = useState(0)
    const [languages, setLanguages] = useState(0)
  

const handlePages = (e) =>{
    setPages(e.target.value)
   
}
const handleLanguages = (e) =>{
    setLanguages(e.target.value)
   
}


webPriceCalculation = ((pages * languages * 30) + webPrice)

  return (
    <>
    <PanelStyled>
    <input type='number' value={pages} name="pages" onChange={handlePages} placeholder='Pages'/>
        <label htmlFor="userName"></label>
    <input type='number' value={languages} name="languages" onChange={handleLanguages} placeholder='Languages'/>
        <label htmlFor="languages"></label>
        <div>Total {webPriceCalculation}</div>
        </PanelStyled>
    </>
  )
}
