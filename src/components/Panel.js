
import {PanelStyled} from '../styles/PanelStyled'


export const Panel = (props) => {
   
   


  return (
    <>
    <PanelStyled>
     <p className=''>Pages </p>
      <div control={props.NumPages}/>
      <p className='' >Languages</p>
      <div control={props.NumLanguages} />
      </PanelStyled>
    </>
  )
}
