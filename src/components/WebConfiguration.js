
import { useState } from 'react'
import {
  PanelStyled, PanelWrapper, ControlsStyled, ButtonControls,
  LabelStyled
} from '../styles/StyledComponents'
import { Popup } from './Popup'


export const WebConfiguration = ({ setPages, setLanguages, pages, languages }) => {

  const [popUpShowing, setPopUpShowing] = useState(false)  

 const popUpHandler = (e) =>{
console.log(e.target)

if(e.target.id === 'btnPages' ){
  setPopUpShowing({
      title:'invalid input',
      message:'Esta es la info de PAGINAS'
  })
  return;
}
if(e.target.id === 'btnLanguages'){
  setPopUpShowing({
      title:'invalid age',
      message:'Esta es la info de IDIOMAS'
  })
  return
}
 }
 const closingHandler = () => {
  setPopUpShowing(null)
}
  return (
    <>
      <PanelStyled>
        <PanelWrapper>
          <ControlsStyled>
            <LabelStyled htmlFor="pages">Número de páginas:</LabelStyled>
            <ButtonControls onClick={() => setPages(pages + 1)}> + </ButtonControls>
            <div>{pages}</div>
            <ButtonControls onClick={() => setPages(pages - 1)}> - </ButtonControls>
            <button
            id='btnPages'
            onClick={ popUpHandler}
             className='btn bg-primary'>i</button>
             {popUpShowing && <Popup title={popUpShowing.title} message={popUpShowing.message} onConfirm={closingHandler}/>}
          </ControlsStyled>

          <ControlsStyled>
            <LabelStyled htmlFor="languages">Número de idiomas:</LabelStyled>
            <ButtonControls onClick={() => setLanguages(languages + 1)}> + </ButtonControls>
            <div>{languages}</div>
            <ButtonControls onClick={() => setLanguages(languages - 1)}> - </ButtonControls>
            <button
            id='btnLanguages'
            onClick={ popUpHandler}
             className='btn bg-primary'>i</button>
             {popUpShowing && <Popup title={popUpShowing.title} message={popUpShowing.message} onConfirm={closingHandler}/>}
          </ControlsStyled>
        </PanelWrapper>
      </PanelStyled>

    </>
  )
}
