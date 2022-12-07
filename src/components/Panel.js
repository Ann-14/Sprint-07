

import { PanelStyled } from '../styles/PanelStyled'
import '../styles/styles.css'

export const Panel = ({ setPages, setLanguages, pages, languages }) => {


  return (
    <>
      <PanelStyled>
        <div className='wrapper'>
          <div className='controls'>
            <label htmlFor="pages">Número de páginas:</label>
            <button onClick={() => setPages(pages + 1)}>+</button>
            <div>{pages}</div>
            <button onClick={() => setPages(pages - 1)}>-</button>
          </div>


          <div className='controls'>
            <label htmlFor="languages">Número de idiomas:</label>
            <button onClick={() => setLanguages(languages + 1)}>+</button>
            <div>{languages}</div>
            <button onClick={() => setLanguages(languages - 1)}>-</button>
          </div>
        </div>
      </PanelStyled>

    </>
  )
}
