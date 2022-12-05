import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CheckBox } from './components/CheckBox';
import { Panel } from './components/Panel';


let suma = 0
let webPrice=0
let seoPrice=0
let adsPrice=0

function App() {
  const [checkWeb, setCheckWeb] = useState(false) 
  const [checkSeo, setCheckSeo] = useState(false) 
  const [checkAds, setCheckAds] = useState(false) 
  


  const webCheckHandler = (e) =>{
    setCheckWeb(!checkWeb)
    webPrice=(+e.target.value)

  }
  const seoCheckHandler = (e) =>{
    setCheckSeo(!checkSeo)
    seoPrice=(+e.target.value)
  }
  const adsCheckHandler = (e) =>{
    setCheckAds(!checkAds)
    adsPrice=(+e.target.value)
  }
  
  
  if(checkWeb === false){webPrice = 0}
  if(checkSeo === false){seoPrice = 0}
  if(checkAds === false){adsPrice = 0}
  suma = (webPrice+seoPrice+adsPrice)
  



  return (
   <>
   <Panel webPrice={webPrice}  />
   
  <div>
   <CheckBox 
   label={'Página Web'}
   value={500}
   name='Web'
   id='checkbox1'
   checked={checkWeb}
   onChange={(e) => webCheckHandler(e)}
   />
   </div>
   <div className='flex items-center pl-3'>
    <CheckBox 
   label={'Consultoría Seo'}
   value={300}
   name='Seo'
   id='checkbox2'
   checked={checkSeo}
   onChange={(e) => seoCheckHandler(e)}
   />
   </div>
   <div>
    <CheckBox 
   label={'Campaña Google Ads'}
   value={200}
   name='Ads'
   id='checkbox3'
   checked={checkAds}
   onChange={(e) => adsCheckHandler(e)}
   />
   </div>
  <div>Suma: {suma}</div>
  
   </>
  );
}

export default App;
