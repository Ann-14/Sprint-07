

import { PanelStyled } from '../styles/PanelStyled'
import '../styles/styles.css'

export const Panel = ({ handleAddPages, handleRemovePages, handleAddLanguages, handleRemoveLanguages, pages, languages }) => {


  return (
    <>
      <PanelStyled>
        <div className='wrapper'>
          <div className='controls'>
            <label htmlFor="pages">Número de páginas:</label>
            <button onClick={() => handleAddPages(1)}>+</button>
            <div>{pages}</div>
            <button onClick={() => handleRemovePages(1)}>-</button>
          </div>


          <div className='controls'>
            <label htmlFor="languages">Número de idiomas:</label>
            <button onClick={() => handleAddLanguages(1)}>+</button>
            <div>{languages}</div>
            <button onClick={() => handleRemoveLanguages(1)}>-</button>
          </div>
        </div>
      </PanelStyled>

    </>
  )
}
