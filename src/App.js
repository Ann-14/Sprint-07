import { useState,useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CheckBox } from './components/CheckBox';


function App() {
  const [checkWeb, setCheckWeb] = useState(false)
  const [checkSeo, setCheckSeo] = useState(false)
  const [checkAds, setCheckAds] = useState(false)
  const [totalDisplay, setTotalDisplay] = useState('')
  let suma = []

  const handleWebCheck = (event) =>{
    setCheckWeb(!checkWeb)
    setTotalDisplay(event.target.value)
    
  }
  const handleSeoCheck = (event) =>{
    setCheckSeo(!checkSeo)
    setTotalDisplay(event.target.value)
    
  }
  const handleAdsCheck = (event) =>{
    setCheckAds(!checkAds)
    
   
  }

  if(checkWeb){
    suma.push()
  }

  return (
   <>
  <div>
   <CheckBox 
   label={'Página Web'}
   value={500}
   name='Web'
   id='checkbox1'
   onChange={(e) => handleWebCheck(e)}
   />
   </div>
   <div className='flex items-center pl-3'>
    <CheckBox 
   label={'Consultoría Seo'}
   value={300}
   name='Seo'
   id='checkbox2'
   onChange={(e) => handleSeoCheck(e)}
   />
   </div>
   <div>
    <CheckBox 
   label={'Campaña Google Ads'}
   value={200}
   name='Ads'
   id='checkbox3'
   onChange={(e) => handleAdsCheck(e)}
   />
   </div>
  <div>{suma}</div>
   <div>Total{totalDisplay}</div>
   <div>Total2{checkWeb || checkSeo || checkAds ? totalDisplay : ''}</div>
   </>
  );
}

export default App;
