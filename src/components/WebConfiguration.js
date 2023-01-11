
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
      <div className='flex text-center flex-col text'>
      
        <div className='flex justify-center'>
         
          <div className='flex flex-col justify-center text-center'>
            
            <label  htmlFor="pages" className='mr-4'> Pages:</label>
            <button onClick={() => setPages(pages + 1)} className=" bg-transparent hover:bg-pink-400 text-black bold px-2 border hover:border-transparent "> + </button>
            <div className='mx-2'>{pages}</div>
            <button onClick={() => setPages(pages - 1)} className="bg-transparent hover:bg-pink-400 text-black bold px-2 border hover:border-transparent "> - </button>
            <button
            id='btnPages'
            onClick={ popUpHandler}
             className='btn '>i</button>
             {popUpShowing && <Popup title={popUpShowing.title} message={popUpShowing.message} onConfirm={closingHandler}/>}
          </div>

          <div className='flex flex-col justify-center text-center'>
            <label htmlFor="languages"  className='mr-4'> Languages:</label>
            <button onClick={() => setLanguages(languages + 1)} className='bg-transparent hover:bg-pink-400 text-black bold px-2 border hover:border-transparent '> + </button>
            <div className='mx-2'>{languages}</div>
            <button onClick={() => setLanguages(languages - 1)} className='bg-transparent hover:bg-pink-400 text-black bold px-2 border hover:border-transparent '> - </button>
            <button
            id='btnLanguages'
            onClick={ popUpHandler}
             className='btn'>i</button>
             {popUpShowing && <Popup title={popUpShowing.title} message={popUpShowing.message} onConfirm={closingHandler}/>}
          </div>
        </div>
      </div>

    </>
  )
}
